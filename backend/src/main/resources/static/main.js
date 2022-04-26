(self["webpackChunklemon_mart"] = self["webpackChunklemon_mart"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 4519:
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMaterialModule": () => (/* binding */ AppMaterialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);















const modules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule,
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule,
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule,
];
let AppMaterialModule = class AppMaterialModule {
};
AppMaterialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        exports: modules,
    })
], AppMaterialModule);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth-guard.service */ 1110);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);







const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: 'login/:redirectUrl', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    {
        path: 'manager',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js-src_app_shared-componen-444443"), __webpack_require__.e("src_app_manager_manager_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./manager/manager.module */ 4886)).then((m) => m.ManagerModule),
        canLoad: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: 'user',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js-src_app_shared-componen-444443"), __webpack_require__.e("src_app_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/user.module */ 8524)).then((m) => m.UserModule),
    },
    {
        path: 'pos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pos_pos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pos/pos.module */ 9295)).then((m) => m.PosModule),
    },
    {
        path: 'inventory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_inventory_inventory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./inventory/inventory.module */ 1564)).then((m) => m.InventoryModule),
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_app_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIC5hcHAtY29udGFpbmVyIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogMDsKICAgICAgICBib3R0b206IDA7CiAgICAgICAgbGVmdDogMDsKICAgICAgICByaWdodDogMDsKICAgICAgfQogICAgICAuYXBwLWlzLW1vYmlsZSAuYXBwLXRvb2xiYXIgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICB6LWluZGV4OiAyOwogICAgICB9CiAgICAgIC5hcHAtc2lkZW5hdi1jb250YWluZXIgewogICAgICAgIGZsZXg6IDE7CiAgICAgIH0KICAgICAgLmFwcC1pcy1tb2JpbGUgLmFwcC1zaWRlbmF2LWNvbnRhaW5lciB7CiAgICAgICAgZmxleDogMSAwIGF1dG87CiAgICAgIH0KICAgICAgbWF0LXNpZGVuYXYgewogICAgICAgIHdpZHRoOiAyMDBweDsKICAgICAgfQogICAgICAuaW1hZ2UtY3JvcHBlciB7CiAgICAgICAgd2lkdGg6IDQwcHg7CiAgICAgICAgaGVpZ2h0OiA0MHB4OwogICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgICBtYXJnaW4tdG9wOiAtOHB4OwogICAgICB9CiAgICA_3D_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_app_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/app.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIC5hcHAtY29udGFpbmVyIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogMDsKICAgICAgICBib3R0b206IDA7CiAgICAgICAgbGVmdDogMDsKICAgICAgICByaWdodDogMDsKICAgICAgfQogICAgICAuYXBwLWlzLW1vYmlsZSAuYXBwLXRvb2xiYXIgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICB6LWluZGV4OiAyOwogICAgICB9CiAgICAgIC5hcHAtc2lkZW5hdi1jb250YWluZXIgewogICAgICAgIGZsZXg6IDE7CiAgICAgIH0KICAgICAgLmFwcC1pcy1tb2JpbGUgLmFwcC1zaWRlbmF2LWNvbnRhaW5lciB7CiAgICAgICAgZmxleDogMSAwIGF1dG87CiAgICAgIH0KICAgICAgbWF0LXNpZGVuYXYgewogICAgICAgIHdpZHRoOiAyMDBweDsKICAgICAgfQogICAgICAuaW1hZ2UtY3JvcHBlciB7CiAgICAgICAgd2lkdGg6IDQwcHg7CiAgICAgICAgaGVpZ2h0OiA0MHB4OwogICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgICBtYXJnaW4tdG9wOiAtOHB4OwogICAgICB9CiAgICA%3D!./src/app/app.component.ts */ 6843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 7736);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ 18);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ 384);










let AppComponent = class AppComponent {
  constructor(iconRegistry, sanitizer, authService, media) {
    this.authService = authService;
    this.media = media;
    this.subs = new subsink__WEBPACK_IMPORTED_MODULE_1__.SubSink();
    iconRegistry.addSvgIcon('lemon', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg'));
  }

  ngOnInit() {
    this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this.media.asObservable(), this.authService.authStatus$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(([mediaValue, authStatus]) => {
      if (!(authStatus === null || authStatus === void 0 ? void 0 : authStatus.isAuthenticated)) {
        this.opened = false;
      } else {
        if (mediaValue[0].mqAlias === 'xs') {
          this.opened = false;
        } else {
          this.opened = true;
        }
      }
    })).subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

};

AppComponent.ctorParameters = () => [{
  type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconRegistry
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
}, {
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.MediaObserver
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-root',
  // prettier-ignore
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" fxLayoutGap="8px" class="app-toolbar" [class.app-is-mobile]="media.isActive('xs')"
        *ngIf="{
          status: authService.authStatus$ | async,
          user: authService.currentUser$ | async
        } as auth;">
        <button *ngIf="auth?.status?.isAuthenticated" mat-icon-button (click)="sidenav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
        <a mat-icon-button routerLink="/home">
          <mat-icon svgIcon="lemon"></mat-icon>
          <span class="mat-h2">LemonMart</span>
        </a>
        <span class="flex-spacer"></span>
        <button *ngIf="auth?.status?.isAuthenticated" mat-mini-fab routerLink="/user/profile" matTooltip="Profile"
          aria-label="User Profile">
          <img *ngIf="auth?.user?.picture" class="image-cropper" [src]="auth?.user?.picture" />
          <mat-icon *ngIf="!auth?.user?.picture">account_circle</mat-icon>
        </button>
        <button *ngIf="auth?.status?.isAuthenticated" mat-mini-fab routerLink="/user/logout" matTooltip="Logout"
          aria-label="Logout">
          <mat-icon>lock_open</mat-icon>
        </button>
      </mat-toolbar>
      <mat-sidenav-container class="app-sidenav-container">
        <mat-sidenav #sidenav [mode]="media.isActive('xs') ? 'over' : 'side'" [fixedInViewport]="media.isActive('xs')" _
          fixedTopGap="56" [(opened)]="opened">
          <app-navigation-menu></app-navigation-menu>
        </mat-sidenav>
        <mat-sidenav-content>
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_app_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIC5hcHAtY29udGFpbmVyIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogMDsKICAgICAgICBib3R0b206IDA7CiAgICAgICAgbGVmdDogMDsKICAgICAgICByaWdodDogMDsKICAgICAgfQogICAgICAuYXBwLWlzLW1vYmlsZSAuYXBwLXRvb2xiYXIgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICB6LWluZGV4OiAyOwogICAgICB9CiAgICAgIC5hcHAtc2lkZW5hdi1jb250YWluZXIgewogICAgICAgIGZsZXg6IDE7CiAgICAgIH0KICAgICAgLmFwcC1pcy1tb2JpbGUgLmFwcC1zaWRlbmF2LWNvbnRhaW5lciB7CiAgICAgICAgZmxleDogMSAwIGF1dG87CiAgICAgIH0KICAgICAgbWF0LXNpZGVuYXYgewogICAgICAgIHdpZHRoOiAyMDBweDsKICAgICAgfQogICAgICAuaW1hZ2UtY3JvcHBlciB7CiAgICAgICAgd2lkdGg6IDQwcHg7CiAgICAgICAgaGVpZ2h0OiA0MHB4OwogICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgICBtYXJnaW4tdG9wOiAtOHB4OwogICAgICB9CiAgICA_3D_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_app_component_ts__WEBPACK_IMPORTED_MODULE_0__.default]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "options": () => (/* binding */ options),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngrx/data */ 6732);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/effects */ 5322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngrx/store-devtools */ 3572);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-mask */ 9129);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-material.module */ 4519);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_auth_http_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-http-interceptor */ 17);
/* harmony import */ var _auth_auth_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.factory */ 3028);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.service */ 384);
/* harmony import */ var _common_simple_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/simple-dialog.component */ 5791);
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entity-metadata */ 1543);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-menu/navigation-menu.component */ 9992);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _user_controls_field_error_field_error_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-controls/field-error/field-error.module */ 4124);




























const options = {
    showMaskTyped: true,
};
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__.HomeComponent,
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__.PageNotFoundComponent,
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__.LoginComponent,
            _navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_11__.NavigationMenuComponent,
            _common_simple_dialog_component__WEBPACK_IMPORTED_MODULE_7__.SimpleDialogComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _app_material_module__WEBPACK_IMPORTED_MODULE_1__.AppMaterialModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule,
            _user_controls_field_error_field_error_module__WEBPACK_IMPORTED_MODULE_13__.FieldErrorModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_21__.NgxMaskModule.forRoot(options),
            _angular_fire__WEBPACK_IMPORTED_MODULE_22__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__.AngularFireAuthModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_24__.StoreModule.forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__.EffectsModule.forRoot([]),
            _ngrx_data__WEBPACK_IMPORTED_MODULE_26__.EntityDataModule.forRoot(_entity_metadata__WEBPACK_IMPORTED_MODULE_8__.entityConfig),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_27__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production }),
        ],
        providers: [
            {
                provide: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService,
                useFactory: _auth_auth_factory__WEBPACK_IMPORTED_MODULE_5__.authFactory,
                deps: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__.AngularFireAuth, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient],
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
                useClass: _auth_auth_http_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthHttpInterceptor,
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [_common_simple_dialog_component__WEBPACK_IMPORTED_MODULE_7__.SimpleDialogComponent],
    })
], AppModule);



/***/ }),

/***/ 1110:
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _common_ui_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/ui.service */ 6775);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 384);






let AuthGuard = class AuthGuard {
    constructor(authService, router, uiService) {
        this.authService = authService;
        this.router = router;
        this.uiService = uiService;
    }
    canLoad(route) {
        return this.checkLogin();
    }
    canActivate(route, state) {
        return this.checkLogin(route);
    }
    canActivateChild(childRoute, state) {
        return this.checkLogin(childRoute);
    }
    checkLogin(route) {
        return this.authService.authStatus$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((authStatus) => {
            console.log(authStatus, 'sssssssssssssssss');
            const roleMatch = this.checkRoleMatch(authStatus.userRole, route);
            const allowLogin = authStatus.isAuthenticated && roleMatch;
            if (!allowLogin) {
                this.showAlert(authStatus.isAuthenticated, roleMatch);
                this.router.navigate(['login'], {
                    queryParams: {
                        redirectUrl: this.getResolvedUrl(route),
                    },
                });
            }
            return allowLogin;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1) // the observable must complete for the guard to work
        );
    }
    checkRoleMatch(role, route) {
        var _a;
        if (!((_a = route === null || route === void 0 ? void 0 : route.data) === null || _a === void 0 ? void 0 : _a.expectedRole)) {
            return true;
        }
        return role === route.data.expectedRole;
    }
    showAlert(isAuth, roleMatch) {
        if (!isAuth) {
            this.uiService.showToast('You must login to continue');
        }
        if (!roleMatch) {
            this.uiService.showToast('You do not have the permissions to view this resource');
        }
    }
    getResolvedUrl(route) {
        if (!route) {
            return '';
        }
        return route.pathFromRoot
            .map((r) => r.url.map((segment) => segment.toString()).join('/'))
            .join('/')
            .replace('//', '/');
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _common_ui_service__WEBPACK_IMPORTED_MODULE_0__.UiService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 17:
/*!***********************************************!*\
  !*** ./src/app/auth/auth-http-interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHttpInterceptor": () => (/* binding */ AuthHttpInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);






let AuthHttpInterceptor = class AuthHttpInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(req, next) {
        const jwt = this.authService.getToken();
        const authRequest = req.clone({ setHeaders: { authorization: `Bearer ${jwt}` } });
        return next.handle(authRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err, caught) => {
            if (err.status === 401) {
                this.router.navigate(['/login'], {
                    queryParams: { redirectUrl: this.router.routerState.snapshot.url },
                });
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }));
    }
};
AuthHttpInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AuthHttpInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], AuthHttpInterceptor);



/***/ }),

/***/ 6251:
/*!*********************************************!*\
  !*** ./src/app/auth/auth.custom.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomAuthService": () => (/* binding */ CustomAuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-enum-util */ 7003);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common */ 7167);
/* harmony import */ var _user_user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user/user */ 2665);
/* harmony import */ var _auth_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.enum */ 2115);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ 384);










let CustomAuthService = class CustomAuthService extends _auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
    }
    authProvider(email, password) {
        return this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl}/v1/auth/login`, {
            email,
            password,
        });
    }
    transformJwtToken(token) {
        return {
            isAuthenticated: !!token.email,
            userId: token.sub,
            userRole: (0,ts_enum_util__WEBPACK_IMPORTED_MODULE_0__.$enum)(_auth_enum__WEBPACK_IMPORTED_MODULE_4__.Role).asValueOrDefault(token.role, _auth_enum__WEBPACK_IMPORTED_MODULE_4__.Role.None),
            userEmail: token.email,
            userPicture: token.picture,
            userPictures: token.picture,
        };
    }
    getCurrentUser() {
        return this.httpClient
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl}/v1/auth/me`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(_user_user_user__WEBPACK_IMPORTED_MODULE_3__.User.Build, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(_common_common__WEBPACK_IMPORTED_MODULE_2__.transformError)));
    }
};
CustomAuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient }
];
CustomAuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()
], CustomAuthService);



/***/ }),

/***/ 2115:
/*!***********************************!*\
  !*** ./src/app/auth/auth.enum.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role),
/* harmony export */   "AuthMode": () => (/* binding */ AuthMode)
/* harmony export */ });
var Role;
(function (Role) {
    Role["None"] = "none";
    Role["Clerk"] = "clerk";
    Role["Cashier"] = "cashier";
    Role["Manager"] = "manager";
})(Role || (Role = {}));
var AuthMode;
(function (AuthMode) {
    AuthMode["InMemory"] = "In Memory";
    AuthMode["CustomServer"] = "Custom Server";
    AuthMode["Firebase"] = "Firebase";
})(AuthMode || (AuthMode = {}));


/***/ }),

/***/ 3028:
/*!**************************************!*\
  !*** ./src/app/auth/auth.factory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFactory": () => (/* binding */ authFactory)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _auth_custom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.custom.service */ 6251);
/* harmony import */ var _auth_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.enum */ 2115);
/* harmony import */ var _auth_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.firebase.service */ 5613);
/* harmony import */ var _auth_inmemory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.inmemory.service */ 6828);





function authFactory(afAuth, httpClient) {
    switch (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authMode) {
        case _auth_enum__WEBPACK_IMPORTED_MODULE_2__.AuthMode.InMemory:
            return new _auth_inmemory_service__WEBPACK_IMPORTED_MODULE_4__.InMemoryAuthService();
        case _auth_enum__WEBPACK_IMPORTED_MODULE_2__.AuthMode.CustomServer:
            return new _auth_custom_service__WEBPACK_IMPORTED_MODULE_1__.CustomAuthService(httpClient);
        case _auth_enum__WEBPACK_IMPORTED_MODULE_2__.AuthMode.Firebase:
            return new _auth_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseAuthService(afAuth);
    }
}


/***/ }),

/***/ 5613:
/*!***********************************************!*\
  !*** ./src/app/auth/auth.firebase.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseAuthService": () => (/* binding */ FirebaseAuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 1952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _user_user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user/user */ 2665);
/* harmony import */ var _auth_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.enum */ 2115);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 384);









let FirebaseAuthService = class FirebaseAuthService extends _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService {
    constructor(afAuth) {
        super();
        this.afAuth = afAuth;
    }
    authProvider(email, password) {
        const serverResponse$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.afAuth.signInWithEmailAndPassword(email, password).then((res) => {
            const firebaseUser = res.user;
            firebaseUser === null || firebaseUser === void 0 ? void 0 : firebaseUser.getIdToken().then((token) => serverResponse$.next({ accessToken: token }), (err) => serverResponse$.error(err));
        }, (err) => serverResponse$.error(err));
        return serverResponse$;
    }
    transformJwtToken(token) {
        if (!token) {
            return _auth_service__WEBPACK_IMPORTED_MODULE_3__.defaultAuthStatus;
        }
        return {
            isAuthenticated: !!token.email,
            userId: token.sub,
            userRole: _auth_enum__WEBPACK_IMPORTED_MODULE_2__.Role.Cashier,
        };
    }
    getCurrentUser() {
        return this.afAuth.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(this.transformFirebaseUser));
    }
    transformFirebaseUser(firebaseUser) {
        var _a, _b;
        if (!firebaseUser) {
            return new _user_user_user__WEBPACK_IMPORTED_MODULE_1__.User();
        }
        return _user_user_user__WEBPACK_IMPORTED_MODULE_1__.User.Build({
            name: {
                first: ((_a = firebaseUser === null || firebaseUser === void 0 ? void 0 : firebaseUser.displayName) === null || _a === void 0 ? void 0 : _a.split(' ')[0]) || 'Firebase',
                last: ((_b = firebaseUser === null || firebaseUser === void 0 ? void 0 : firebaseUser.displayName) === null || _b === void 0 ? void 0 : _b.split(' ')[1]) || 'User',
            },
            picture: firebaseUser.photoURL,
            email: firebaseUser.email,
            _id: firebaseUser.uid,
            role: _auth_enum__WEBPACK_IMPORTED_MODULE_2__.Role.None,
        });
    }
    logout() {
        if (this.afAuth) {
            this.afAuth.signOut();
        }
        this.clearToken();
        this.authStatus$.next(_auth_service__WEBPACK_IMPORTED_MODULE_3__.defaultAuthStatus);
    }
};
FirebaseAuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth }
];
FirebaseAuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
], FirebaseAuthService);



/***/ }),

/***/ 6828:
/*!***********************************************!*\
  !*** ./src/app/auth/auth.inmemory.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryAuthService": () => (/* binding */ InMemoryAuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var fake_jwt_sign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fake-jwt-sign */ 7109);
/* harmony import */ var fake_jwt_sign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fake_jwt_sign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _user_user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user/user */ 2665);
/* harmony import */ var _auth_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.enum */ 2115);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 384);


 // For InMemoryAuthService only




let InMemoryAuthService = class InMemoryAuthService extends _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService {
    constructor() {
        super();
        // LemonMart Server User Id: 5da01751da27cc462d265913
        this.defaultUser = _user_user_user__WEBPACK_IMPORTED_MODULE_1__.User.Build({
            _id: '5da01751da27cc462d265913',
            email: 'duluca@gmail.com',
            name: { first: 'Doguhan', last: 'Uluca' },
            picture: 'https://secure.gravatar.com/avatar/7cbaa9afb5ca78d97f3c689f8ce6c985',
            role: _auth_enum__WEBPACK_IMPORTED_MODULE_2__.Role.Manager,
            dateOfBirth: new Date(1980, 1, 1),
            userStatus: true,
            address: {
                line1: '101 Sesame St.',
                city: 'Bethesda',
                state: 'Maryland',
                zip: '20810',
            },
            level: 2,
            phones: [
                {
                    id: 0,
                    type: _user_user_user__WEBPACK_IMPORTED_MODULE_1__.PhoneType.Mobile,
                    digits: '5555550717',
                },
            ],
        });
        console.warn("You're using the InMemoryAuthService. Do not use this service in production.");
    }
    authProvider(email, password) {
        email = email.toLowerCase();
        if (!email.endsWith('@test.com')) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Failed to login! Email needs to end with @test.com.');
        }
        const authStatus = {
            isAuthenticated: true,
            userId: this.defaultUser._id,
            userRole: email.includes('cashier')
                ? _auth_enum__WEBPACK_IMPORTED_MODULE_2__.Role.Cashier
                : email.includes('clerk')
                    ? _auth_enum__WEBPACK_IMPORTED_MODULE_2__.Role.Clerk
                    : email.includes('manager')
                        ? _auth_enum__WEBPACK_IMPORTED_MODULE_2__.Role.Manager
                        : _auth_enum__WEBPACK_IMPORTED_MODULE_2__.Role.None,
        };
        this.defaultUser.role = authStatus.userRole;
        const authResponse = {
            accessToken: (0,fake_jwt_sign__WEBPACK_IMPORTED_MODULE_0__.sign)(authStatus, 'secret', {
                expiresIn: '1h',
                algorithm: 'none',
            }),
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(authResponse);
    }
    transformJwtToken(token) {
        return token;
    }
    getCurrentUser() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.defaultUser);
    }
};
InMemoryAuthService.ctorParameters = () => [];
InMemoryAuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()
], InMemoryAuthService);



/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultAuthStatus": () => (/* binding */ defaultAuthStatus),
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 8248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4022);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ 7167);
/* harmony import */ var _user_user_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user/user */ 2665);
/* harmony import */ var _auth_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.enum */ 2115);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache.service */ 3773);









const defaultAuthStatus = {
    isAuthenticated: false,
    userRole: _auth_enum__WEBPACK_IMPORTED_MODULE_3__.Role.None,
    userId: '',
};
let AuthService = class AuthService extends _cache_service__WEBPACK_IMPORTED_MODULE_4__.CacheService {
    constructor() {
        super();
        this.getAndUpdateUserIfAuthenticated = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((status) => status.isAuthenticated), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(() => this.getCurrentUser()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((user) => this.currentUser$.next(user)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_common_common__WEBPACK_IMPORTED_MODULE_1__.transformError));
        this.authStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(defaultAuthStatus);
        this.currentUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(new _user_user_user__WEBPACK_IMPORTED_MODULE_2__.User());
        this.resumeCurrentUser$ = this.authStatus$.pipe(this.getAndUpdateUserIfAuthenticated);
        if (this.hasExpiredToken()) {
            this.logout(true);
        }
        else {
            this.authStatus$.next(this.getAuthStatusFromToken());
            // To load user on browser refresh, resume pipeline must activate on the next cycle
            // Which allows for all services to constructed properly
            setTimeout(() => this.resumeCurrentUser$.subscribe(), 0);
        }
    }
    login(email, password) {
        this.clearToken();
        const loginResponse$ = this.authProvider(email, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((value) => {
            console.log(value);
            this.setToken(value.accessToken);
            const token = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.default)(value.accessToken);
            return this.transformJwtToken(token);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)((status) => this.authStatus$.next(status)), this.getAndUpdateUserIfAuthenticated);
        loginResponse$.subscribe({
            error: (err) => {
                this.logout();
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(err);
            },
        });
        return loginResponse$;
    }
    logout(clearToken) {
        if (clearToken) {
            this.clearToken();
        }
        setTimeout(() => this.authStatus$.next(defaultAuthStatus), 0);
    }
    setToken(jwt) {
        this.setItem('jwt', jwt);
    }
    getToken() {
        var _a;
        return (_a = this.getItem('jwt')) !== null && _a !== void 0 ? _a : '';
    }
    clearToken() {
        this.removeItem('jwt');
    }
    hasExpiredToken() {
        const jwt = this.getToken();
        if (jwt) {
            const payload = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.default)(jwt);
            return Date.now() >= payload.exp * 1000;
        }
        return true;
    }
    getAuthStatusFromToken() {
        return this.transformJwtToken((0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.default)(this.getToken()));
    }
};
AuthService.ctorParameters = () => [];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injectable)()
], AuthService);



/***/ }),

/***/ 3773:
/*!***************************************!*\
  !*** ./src/app/auth/cache.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheService": () => (/* binding */ CacheService)
/* harmony export */ });
class CacheService {
    getItem(key) {
        const data = localStorage.getItem(key);
        if (data != null) {
            return JSON.parse(data);
        }
        return null;
    }
    setItem(key, data) {
        if (typeof data === 'string') {
            localStorage.setItem(key, data);
        }
        localStorage.setItem(key, JSON.stringify(data));
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}


/***/ }),

/***/ 7167:
/*!**********************************!*\
  !*** ./src/app/common/common.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformError": () => (/* binding */ transformError)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 205);

function transformError(error) {
    let errorMessage = 'An unknown error has occurred';
    if (typeof error === 'string') {
        errorMessage = error;
    }
    else if (error.error instanceof ErrorEvent) {
        errorMessage = `Error! ${error.error.message}`;
    }
    else if (error.status) {
        errorMessage = `Request failed with ${error.status} ${error.statusText}`;
    }
    else if (error instanceof Error) {
        errorMessage = error.message;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(errorMessage);
}


/***/ }),

/***/ 5791:
/*!***************************************************!*\
  !*** ./src/app/common/simple-dialog.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleDialogComponent": () => (/* binding */ SimpleDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ 2238);



let SimpleDialogComponent = class SimpleDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
};
SimpleDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MAT_DIALOG_DATA,] }] }
];
SimpleDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        // prettier-ignore
        template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <p>{{ data.content }}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <span class="flex-spacer"></span>
      <button mat-button mat-dialog-close *ngIf="data.cancelText">
        {{ data.cancelText }}
      </button>
      <button mat-button mat-button-raised color="primary" [mat-dialog-close]="true"
        cdkFocusInitial>
        {{ data.okText }}
      </button>
    </mat-dialog-actions>
  `,
    })
], SimpleDialogComponent);



/***/ }),

/***/ 6775:
/*!**************************************!*\
  !*** ./src/app/common/ui.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiService": () => (/* binding */ UiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _simple_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-dialog.component */ 5791);





let UiService = class UiService {
    constructor(snackBar, dialog) {
        this.snackBar = snackBar;
        this.dialog = dialog;
    }
    showToast(message, action = 'Close', config) {
        this.snackBar.open(message, action, config || {
            duration: 7000,
        });
    }
    showDialog(title, content, okText = 'OK', cancelText, customConfig) {
        const dialogRef = this.dialog.open(_simple_dialog_component__WEBPACK_IMPORTED_MODULE_0__.SimpleDialogComponent, customConfig || {
            width: '300px',
            data: { title, content, okText, cancelText },
        });
        return dialogRef.afterClosed();
    }
};
UiService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog }
];
UiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], UiService);



/***/ }),

/***/ 4223:
/*!***************************************!*\
  !*** ./src/app/common/validations.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionalTextValidation": () => (/* binding */ OptionalTextValidation),
/* harmony export */   "RequiredTextValidation": () => (/* binding */ RequiredTextValidation),
/* harmony export */   "OneCharValidation": () => (/* binding */ OneCharValidation),
/* harmony export */   "EmailValidation": () => (/* binding */ EmailValidation),
/* harmony export */   "PasswordValidation": () => (/* binding */ PasswordValidation),
/* harmony export */   "USAZipCodeValidation": () => (/* binding */ USAZipCodeValidation),
/* harmony export */   "USAPhoneNumberValidation": () => (/* binding */ USAPhoneNumberValidation)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 3679);

const OptionalTextValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50)];
const RequiredTextValidation = OptionalTextValidation.concat([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
const OneCharValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(1)];
const EmailValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email];
const PasswordValidation = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required,
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(8),
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50),
];
const USAZipCodeValidation = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required,
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern(/^\d{5}(?:[-\s]\d{4})?$/),
];
const USAPhoneNumberValidation = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required,
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/),
];


/***/ }),

/***/ 1543:
/*!************************************!*\
  !*** ./src/app/entity-metadata.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entityConfig": () => (/* binding */ entityConfig)
/* harmony export */ });
const entityMetadata = {
    User: {},
};
const entityConfig = {
    entityMetadata,
};


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);



let HomeComponent = class HomeComponent {
  constructor(authService) {
    this.authService = authService;
  }

};

HomeComponent.ctorParameters = () => [{
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
}];

HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-home',
  template: `
    <div *ngIf="(authService.authStatus$ | async)?.isAuthenticated; else doLogin">
      <div class="mat-display-4">This is LemonMart! The place where</div>
      <div class="mat-display-4">
        You get a lemon, you get a lemon, you get a lemon...
      </div>
      <div class="mat-display-4">Everybody gets a lemon.</div>
    </div>
    <ng-template #doLogin>
      <app-login></app-login>
    </ng-template>
  `
})], HomeComponent);


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./login.component.html */ 6850);
/* harmony import */ var C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_login_login_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIC5lcnJvciB7CiAgICAgICAgY29sb3I6IHJlZDsKICAgICAgfQogICAg_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_login_login_component_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/login/login.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIC5lcnJvciB7CiAgICAgICAgY29sb3I6IHJlZDsKICAgICAgfQogICAg!./src/app/login/login.component.ts */ 963);
/* harmony import */ var C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_login_login_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIGRpdltmeExheW91dF0gewogICAgICAgIG1hcmdpbi10b3A6IDMycHg7CiAgICAgIH0KICAgIA_3D_3D_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_login_login_component_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/login/login.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIGRpdltmeExheW91dF0gewogICAgICAgIG1hcmdpbi10b3A6IDMycHg7CiAgICAgIH0KICAgIA%3D%3D!./src/app/login/login.component.ts */ 6496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! subsink */ 18);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _auth_auth_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.enum */ 2115);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _common_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/ui.service */ 6775);
/* harmony import */ var _common_validations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/validations */ 4223);
















let LoginComponent = class LoginComponent {
  constructor(formBuilder, authService, router, route, uiService) {
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.router = router;
    this.uiService = uiService;
    this.subs = new subsink__WEBPACK_IMPORTED_MODULE_4__.SubSink();
    this.loginError = '';
    this.roles = Object.keys(_auth_auth_enum__WEBPACK_IMPORTED_MODULE_6__.Role);
    this.authMode = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.authMode;
    this.AuthMode = _auth_auth_enum__WEBPACK_IMPORTED_MODULE_6__.AuthMode;
    this.subs.sink = route.paramMap.subscribe(params => {
      var _a;

      return this.redirectUrl = (_a = params.get('redirectUrl')) !== null && _a !== void 0 ? _a : '';
    });
  }

  ngOnInit() {
    this.authService.logout();
    this.buildLoginForm();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', _common_validations__WEBPACK_IMPORTED_MODULE_9__.EmailValidation],
      password: ['', _common_validations__WEBPACK_IMPORTED_MODULE_9__.PasswordValidation]
    });
  }

  login(submittedForm) {
    var _this = this;

    return (0,C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.authService.login(submittedForm.value.email, submittedForm.value.password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(err => _this.loginError = err));

      _this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([_this.authService.authStatus$, _this.authService.currentUser$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(([authStatus, user]) => authStatus.isAuthenticated && (user === null || user === void 0 ? void 0 : user._id) !== ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(([authStatus, user]) => {
        _this.uiService.showToast(`Welcome ${user.fullName}! Role: ${user.role}`);

        _this.router.navigate([_this.redirectUrl || _this.homeRoutePerRole(user.role)]);
      })).subscribe();
    })();
  }

  homeRoutePerRole(role) {
    switch (role) {
      case _auth_auth_enum__WEBPACK_IMPORTED_MODULE_6__.Role.Cashier:
        return '/pos';

      case _auth_auth_enum__WEBPACK_IMPORTED_MODULE_6__.Role.Clerk:
        return '/inventory';

      case _auth_auth_enum__WEBPACK_IMPORTED_MODULE_6__.Role.Manager:
        return '/manager';

      default:
        return '/user/profile';
    }
  }

};

LoginComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
}, {
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
}, {
  type: _common_ui_service__WEBPACK_IMPORTED_MODULE_8__.UiService
}];

LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-login',
  template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_login_login_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIC5lcnJvciB7CiAgICAgICAgY29sb3I6IHJlZDsKICAgICAgfQogICAg_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_login_login_component_ts__WEBPACK_IMPORTED_MODULE_2__.default, C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_login_login_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIGRpdltmeExheW91dF0gewogICAgICAgIG1hcmdpbi10b3A6IDMycHg7CiAgICAgIH0KICAgIA_3D_3D_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_login_login_component_ts__WEBPACK_IMPORTED_MODULE_3__.default]
})], LoginComponent);


/***/ }),

/***/ 9992:
/*!**************************************************************!*\
  !*** ./src/app/navigation-menu/navigation-menu.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationMenuComponent": () => (/* binding */ NavigationMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_navigation_menu_navigation_menu_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIC5hY3RpdmUtbGluayB7CiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjsKICAgICAgfQogICAg_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_navigation_menu_navigation_menu_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/navigation-menu/navigation-menu.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIC5hY3RpdmUtbGluayB7CiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjsKICAgICAgfQogICAg!./src/app/navigation-menu/navigation-menu.component.ts */ 1918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let NavigationMenuComponent = class NavigationMenuComponent {
    constructor() { }
    ngOnInit() { }
};
NavigationMenuComponent.ctorParameters = () => [];
NavigationMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-navigation-menu',
        template: `
    <mat-nav-list>
      <h3 matSubheader>Manager</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/manager/users">
        Users
      </a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/manager/receipts">
        Receipts
      </a>
      <h3 matSubheader>Inventory</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/stock-entry">
        Stock Entry
      </a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/products">
        Products
      </a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/categories">
        Categories
      </a>
      <h3 matSubheader>Clerk</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/pos">POS</a>
    </mat-nav-list>
  `,
        styles: [C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_navigation_menu_navigation_menu_component_ts_css_C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_ngtools_webpack_src_inline_data_loader_js_data_CiAgICAgIC5hY3RpdmUtbGluayB7CiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjsKICAgICAgfQogICAg_C_Users_odniyonkuru_Downloads_lemon_mart_main_src_app_navigation_menu_navigation_menu_component_ts__WEBPACK_IMPORTED_MODULE_0__.default]
    })
], NavigationMenuComponent);



/***/ }),

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
PageNotFoundComponent.ctorParameters = () => [];
PageNotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-page-not-found',
        template: `
    <p>
      This page doesn't exist. Go back to
      <a routerLink="/home">home</a>
      .
    </p>
  `,
    })
], PageNotFoundComponent);



/***/ }),

/***/ 3771:
/*!********************************************************************!*\
  !*** ./src/app/user-controls/field-error/field-error.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorSets": () => (/* binding */ ErrorSets),
/* harmony export */   "FieldErrorDirective": () => (/* binding */ FieldErrorDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8307);




const ErrorSets = {
    OptionalText: ['minlength', 'maxlength'],
    RequiredText: ['minlength', 'maxlength', 'required'],
};
let FieldErrorDirective = class FieldErrorDirective {
    constructor(el) {
        this.el = el;
        this.nativeElement = this.el.nativeElement;
    }
    initFieldControl() {
        var _a, _b;
        if (this.input && this.group) {
            const controlName = (_a = this.input.getAttribute('formControlName')) !== null && _a !== void 0 ? _a : '';
            this.fieldControl = this.fieldControl || this.group.get(controlName);
            if (!this.fieldControl) {
                throw new Error(`[appFieldError] couldn't bind to control ${controlName}`);
            }
            this.unsubscribe();
            this.controlSubscription = (_b = this.fieldControl) === null || _b === void 0 ? void 0 : _b.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(() => { var _a; return ((_a = this.fieldControl) === null || _a === void 0 ? void 0 : _a.status) === 'INVALID'; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.updateErrorMessage())).subscribe();
        }
    }
    ngOnChanges(changes) {
        this.initFieldControl();
        if (changes.input.firstChange) {
            if (this.input) {
                this.input.onblur = () => this.updateErrorMessage();
                this.fieldLabel =
                    this.fieldLabel ||
                        this.input.placeholder ||
                        this.input.getAttribute('aria-label') ||
                        '';
            }
            else {
                throw new Error(`appFieldError.[input] couldn't bind to any input element`);
            }
        }
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    unsubscribe() {
        var _a;
        (_a = this.controlSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    updateErrorMessage() {
        const errorsToDisplay = [];
        const errors = Array.isArray(this.appFieldError)
            ? this.appFieldError
            : [this.appFieldError];
        errors.forEach((error) => {
            const errorCode = typeof error === 'object' ? error.error : error;
            const message = typeof error === 'object'
                ? () => error.message
                : () => this.getStandardErrorMessage(errorCode);
            const errorChecker = errorCode === 'invalid'
                ? () => { var _a; return (_a = this.fieldControl) === null || _a === void 0 ? void 0 : _a.invalid; }
                : () => { var _a; return (_a = this.fieldControl) === null || _a === void 0 ? void 0 : _a.hasError(errorCode); };
            if (errorChecker()) {
                errorsToDisplay.push(message());
            }
        });
        this.renderErrors(errorsToDisplay.join('<br>'));
    }
    renderErrors(errors) {
        this.nativeElement.innerHTML = errors;
    }
    getStandardErrorMessage(error) {
        var _a, _b, _c, _d, _e, _f;
        const label = this.fieldLabel || 'Input';
        switch (error) {
            case 'required':
                return `${label} is required`;
            case 'minlength':
                return `${label} must be at least ${(_c = (_b = (_a = this.fieldControl) === null || _a === void 0 ? void 0 : _a.getError(error)) === null || _b === void 0 ? void 0 : _b.requiredLength) !== null && _c !== void 0 ? _c : 2} characters`;
            case 'maxlength':
                return `${label} can\'t exceed ${(_f = (_e = (_d = this.fieldControl) === null || _d === void 0 ? void 0 : _d.getError(error)) === null || _e === void 0 ? void 0 : _e.requiredLength) !== null && _f !== void 0 ? _f : 50} characters`;
            case 'invalid':
                return `A valid ${label} is required`;
        }
    }
};
FieldErrorDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
FieldErrorDirective.propDecorators = {
    appFieldError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    fieldControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    fieldLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FieldErrorDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
        selector: '[appFieldError]',
    })
], FieldErrorDirective);



/***/ }),

/***/ 4124:
/*!*****************************************************************!*\
  !*** ./src/app/user-controls/field-error/field-error.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldErrorModule": () => (/* binding */ FieldErrorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _field_error_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-error.directive */ 3771);





let FieldErrorModule = class FieldErrorModule {
};
FieldErrorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
        declarations: [_field_error_directive__WEBPACK_IMPORTED_MODULE_0__.FieldErrorDirective],
        exports: [_field_error_directive__WEBPACK_IMPORTED_MODULE_0__.FieldErrorDirective],
    })
], FieldErrorModule);



/***/ }),

/***/ 2665:
/*!***********************************!*\
  !*** ./src/app/user/user/user.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneType": () => (/* binding */ PhoneType),
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _auth_auth_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/auth.enum */ 2115);

var PhoneType;
(function (PhoneType) {
    PhoneType["None"] = "none";
    PhoneType["Mobile"] = "mobile";
    PhoneType["Home"] = "home";
    PhoneType["Work"] = "work";
})(PhoneType || (PhoneType = {}));
class User {
    constructor(
    // tslint:disable-next-line: variable-name
    _id = '', email = '', name = { first: '', middle: '', last: '' }, picture = '', role = _auth_auth_enum__WEBPACK_IMPORTED_MODULE_0__.Role.None, dateOfBirth = null, userStatus = false, level = 0, address = {
        line1: '',
        city: '',
        state: '',
        zip: '',
    }, phones = []) {
        this._id = _id;
        this.email = email;
        this.name = name;
        this.picture = picture;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.userStatus = userStatus;
        this.level = level;
        this.address = address;
        this.phones = phones;
    }
    static Build(user) {
        if (!user) {
            return new User();
        }
        if (typeof user.dateOfBirth === 'string') {
            user.dateOfBirth = new Date(user.dateOfBirth);
        }
        return new User(user._id, user.email, user.name, user.picture, user.role, user.dateOfBirth, user.userStatus, user.level, user.address, user.phones);
    }
    get fullName() {
        if (!this.name) {
            return '';
        }
        if (this.name.middle) {
            return `${this.name.first} ${this.name.middle} ${this.name.last}`;
        }
        return `${this.name.first} ${this.name.last}`;
    }
    toJSON() {
        const serialized = Object.assign(this);
        delete serialized._id;
        delete serialized.fullName;
        return serialized;
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _app_auth_auth_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/auth/auth.enum */ 2115);

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`,
// but if you do `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:3000',
    authMode: _app_auth_auth_enum__WEBPACK_IMPORTED_MODULE_0__.AuthMode.Firebase,
    firebase: {
        apiKey: 'AIzaSyA_39OnkusNS7WeMqTuhRosonMV20WntcA',
        authDomain: 'lemon-mart-007.firebaseapp.com',
        databaseURL: 'https://lemon-mart-007.firebaseio.com',
        projectId: 'lemon-mart-007',
        storageBucket: '',
        messagingSenderId: '416892066612',
        appId: '1:416892066612:web:ec2f404c18fd4bd8',
    },
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.log(err));


/***/ }),

/***/ 1918:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/navigation-menu/navigation-menu.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIC5hY3RpdmUtbGluayB7CiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjsKICAgICAgfQogICAg!./src/app/navigation-menu/navigation-menu.component.ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n      .active-link {\n        font-weight: bold;\n        border-left: 3px solid green;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsaUJBQWlCO1FBQ2pCLDRCQUE0QjtNQUM5QiIsImZpbGUiOiJuYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYWN0aXZlLWxpbmsge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcbiAgICAgIH1cbiAgICAiXX0= */");

/***/ }),

/***/ 6843:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/app.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIC5hcHAtY29udGFpbmVyIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogMDsKICAgICAgICBib3R0b206IDA7CiAgICAgICAgbGVmdDogMDsKICAgICAgICByaWdodDogMDsKICAgICAgfQogICAgICAuYXBwLWlzLW1vYmlsZSAuYXBwLXRvb2xiYXIgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICB6LWluZGV4OiAyOwogICAgICB9CiAgICAgIC5hcHAtc2lkZW5hdi1jb250YWluZXIgewogICAgICAgIGZsZXg6IDE7CiAgICAgIH0KICAgICAgLmFwcC1pcy1tb2JpbGUgLmFwcC1zaWRlbmF2LWNvbnRhaW5lciB7CiAgICAgICAgZmxleDogMSAwIGF1dG87CiAgICAgIH0KICAgICAgbWF0LXNpZGVuYXYgewogICAgICAgIHdpZHRoOiAyMDBweDsKICAgICAgfQogICAgICAuaW1hZ2UtY3JvcHBlciB7CiAgICAgICAgd2lkdGg6IDQwcHg7CiAgICAgICAgaGVpZ2h0OiA0MHB4OwogICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgICBtYXJnaW4tdG9wOiAtOHB4OwogICAgICB9CiAgICA%3D!./src/app/app.component.ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n      .app-container {\n        display: flex;\n        flex-direction: column;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n      }\n      .app-is-mobile .app-toolbar {\n        position: fixed;\n        z-index: 2;\n      }\n      .app-sidenav-container {\n        flex: 1;\n      }\n      .app-is-mobile .app-sidenav-container {\n        flex: 1 0 auto;\n      }\n      mat-sidenav {\n        width: 200px;\n      }\n      .image-cropper {\n        width: 40px;\n        height: 40px;\n        position: relative;\n        overflow: hidden;\n        border-radius: 50%;\n        margin-top: -8px;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtNQUNWO01BQ0E7UUFDRSxlQUFlO1FBQ2YsVUFBVTtNQUNaO01BQ0E7UUFDRSxPQUFPO01BQ1Q7TUFDQTtRQUNFLGNBQWM7TUFDaEI7TUFDQTtRQUNFLFlBQVk7TUFDZDtNQUNBO1FBQ0UsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixnQkFBZ0I7TUFDbEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmFwcC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICAgIC5hcHAtaXMtbW9iaWxlIC5hcHAtdG9vbGJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgIH1cbiAgICAgIC5hcHAtc2lkZW5hdi1jb250YWluZXIge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgLmFwcC1pcy1tb2JpbGUgLmFwcC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgfVxuICAgICAgbWF0LXNpZGVuYXYge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICB9XG4gICAgICAuaW1hZ2UtY3JvcHBlciB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgfVxuICAgICJdfQ== */");

/***/ }),

/***/ 963:
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/login/login.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIC5lcnJvciB7CiAgICAgICAgY29sb3I6IHJlZDsKICAgICAgfQogICAg!./src/app/login/login.component.ts ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n      .error {\n        color: red;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxVQUFVO01BQ1oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuZXJyb3Ige1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgICJdfQ== */");

/***/ }),

/***/ 6496:
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/login/login.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=CiAgICAgIGRpdltmeExheW91dF0gewogICAgICAgIG1hcmdpbi10b3A6IDMycHg7CiAgICAgIH0KICAgIA%3D%3D!./src/app/login/login.component.ts ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n      div[fxLayout] {\n        margin-top: 32px;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBkaXZbZnhMYXlvdXRdIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgIH1cbiAgICAiXX0= */");

/***/ }),

/***/ 6850:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card fxFlex=\"400px\">\n    <mat-card-header>\n      <mat-card-title>\n        <div class=\"mat-headline\">Hello, Limoncu!</div>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm)\" fxLayout=\"column\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\n          <mat-icon>email</mat-icon>\n          <mat-form-field fxFlex>\n            <input matInput placeholder=\"E-mail\" aria-label=\"E-mail\"\n              formControlName=\"email\" #email />\n            <mat-error [input]=\"email\" [group]=\"loginForm\" appFieldError=\"invalid\">\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\n          <mat-icon matPrefix>vpn_key</mat-icon>\n          <mat-form-field fxFlex>\n            <input matInput placeholder=\"Password\" aria-label=\"Password\" type=\"password\"\n              formControlName=\"password\" #password />\n            <mat-hint>Minimum 8 characters</mat-hint>\n            <mat-error [input]=\"password\" [group]=\"loginForm\"\n              [appFieldError]=\"['required', 'minlength', 'maxlength']\">\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" class=\"margin-top\">\n          <div *ngIf=\"loginError\" class=\"mat-caption error\">{{ loginError }}</div>\n          <div class=\"flex-spacer\"></div>\n          <button mat-raised-button type=\"submit\" color=\"primary\"\n            [disabled]=\"loginForm.invalid\">\n            Login\n          </button>\n        </div>\n      </form>\n    </mat-card-content>\n    <mat-card-content>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\n        <span>Authentication Mode: </span><i>{{ authMode }}</i>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\"\n        *ngIf=\"authMode !== AuthMode.InMemory\">\n        <span>Demo Credentials: </span><button mat-button\n          (click)=\"this.loginForm.patchValue({ email: 'duluca@gmail.com', password: 'l0l1pop!!' })\">Fill</button>\n      </div>\n      <mat-accordion *ngIf=\"authMode === AuthMode.InMemory\">\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Fake Login Info\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-grid-list cols=\"3\" rowHeight=\"48px\" role=\"list\">\n            <mat-grid-tile [colspan]=\"3\" role=\"listitem\" style=\"background: pink\">\n              Use any 8 character string as password\n            </mat-grid-tile>\n            <mat-grid-tile>\n              <mat-grid-tile-header>Role</mat-grid-tile-header>\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"2\">\n              <mat-grid-tile-header>E-mail</mat-grid-tile-header>\n            </mat-grid-tile>\n            <div *ngFor=\"let role of roles; odd as oddRow\">\n              <mat-grid-tile role=\"listitem\"\n                [style.background]=\"oddRow ? 'lightGray': 'white'\">\n                {{role}}\n              </mat-grid-tile>\n              <mat-grid-tile [colspan]=\"2\" role=\"listitem\"\n                [style.background]=\"oddRow ? 'lightGray': 'white'\">\n                <div fxFlex fxLayoutAlign=\"end center\">\n                  <div *ngIf=\"role.toLowerCase() === 'none'; else otherRoles\">\n                    Any @test.com email\n                  </div>\n                  <ng-template #otherRoles>{{role.toLowerCase()}}@test.com</ng-template>\n                  <button mat-button (click)=\"\n                      this.loginForm.patchValue(\n                        { email: role.toLowerCase() + '@test.com', password: 'whatever' }\n                      )\">\n                    Fill\n                  </button>\n                </div>\n              </mat-grid-tile>\n            </div>\n          </mat-grid-list>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map