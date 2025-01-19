"use strict";
(self["webpackChunkangular_ssr_app"] = self["webpackChunkangular_ssr_app"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ 2905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: "",
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: "about",
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor() {
    this.title = 'angular-ssr-app';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ 2905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.provideClientHydration)()],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 2905:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AboutComponent {
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 83,
      vars: 0,
      consts: [[1, "responsiveHeader"], [1, "row"], [1, "col-md-6", "col-sm-6"], [1, "logo"], ["href", "/"], ["src", "../assets/img/logo.png", "alt", ""], ["onclick", "openNav()", 1, "navigation", 2, "font-size", "30px", "cursor", "pointer"], ["id", "myNav", 1, "overlay"], ["href", "javascript:void(0)", "onclick", "closeNav()", 1, "closebtn"], [1, "overlay-content"], ["href", "/about", 1, "active"], ["href", "/properties"], ["href", "/products"], ["href", "/services"], ["href", "/contact"], [1, "container-fluid"], [1, "col-xl-5", "col-lg-5", "col-md-6"], [1, "aboutUs"], ["src", "./assets/img/about-image.png", "alt", ""], [1, "col-xl-6", "col-lg-6", "col-md-6"], [1, "pageWrapper", "about"], ["src", "./assets/img/logo.png", "alt", ""], [1, "scroll", "resrv"], [1, "info"], [1, "textWrap"], [1, "terms", "cate"], ["href", "/legal/terms-of-service"], ["href", "/legal/privacy-policy"], ["href", "https://setibjamaica.com", "target", "_blank"], [1, "col-xl-1", "col-lg-1", "col-md-0", "hide"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "flex-column", "p-3", "rightMenu"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "flex-column"], [1, "nav-item"], ["aria-current", "page", "href", "/", 1, "nav-link"], [1, "nav-item", "active"], ["href", "/about", 1, "nav-link"], ["href", "/properties", 1, "nav-link"], ["href", "/products", 1, "nav-link"], ["href", "/services", 1, "nav-link"], ["href", "/contact", 1, "nav-link"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u2630");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Properties");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 1)(27, "div", 16)(28, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19)(31, "div", 20)(32, "div", 3)(33, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22)(36, "div", 23)(37, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "About Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24)(40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " At Shevnna, we are dedicated to providing comprehensive solutions for your home and lifestyle needs. Whether you're seeking a new rental property, planning a home renovation, enhancing your home decor, or organizing a memorable event,we have the expertise and services to make it happen. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Our property rental services cater to a wide range of preferences and budgets. Whether you're looking for a cozy apartment in a quiet neighborhood or a spacious family home with modern amenities, our extensive inventory has something to suit your needs. Our team of experienced professionals is committed to finding the perfect rental property that meets your specific criteria. We understand that finding the right home can be a stressful process, so we strive to make it as easy and enjoyable as possible. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Transform your living space with our expert home renovation services. Our team of skilled contractors and designers can handle projects of all sizes, from minor updates to complete overhauls. Whether you're looking to modernize your kitchen, create a spa-like bathroom, or add a new room to your home, we have the expertise to bring your vision to life.We pride ourselves on our attention to detail, quality workmanship, and commitment to meeting deadlines.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Elevate your home's aesthetic with our curated collection of high-quality home decor items. From stylish furniture and lighting to trendy accessories and artwork, we have everything you need to create a personalized and inviting space. Our team of design experts can provide personalized advice and recommendations to help you achieve your desired look.Whether you're looking to add a touch of modern elegance or create a cozy and comfortable atmosphere, we have the perfect pieces to suit your style. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Let Shevnna take the stress out of planning your next event. Our event planning services cover everything from venue selection and catering to decor and entertainment. We offer a wide range of party rental items, including tables, chairs,linens, and equipment, to ensure your event is a success. Our team of experienced event planners will work closely with you to understand your vision and create a memorable occasion that exceeds your expectations. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "We accept a variety of payment methods: Zelle, E-Pay, PayPal, Cash App, and bank transfers. Enjoy hassle-free delivery via Knutsford, Tara, Doorway Express, and Mail.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25)(53, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Terms of Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " | ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span")(59, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Powered by Setib Business Solutions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29)(62, "nav", 30)(63, "div", 31)(64, "ul", 32)(65, "li", 33)(66, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 35)(69, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 33)(72, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Properties");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 33)(75, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 33)(78, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 33)(81, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HomeComponent {
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 88,
      vars: 0,
      consts: [[1, "responsiveHeader"], [1, "row"], [1, "col-md-6", "col-sm-6"], [1, "logo"], ["href", "/"], ["src", "./img/logo.png", "alt", ""], ["onclick", "openNav()", 1, "navigation", 2, "font-size", "30px", "cursor", "pointer"], ["id", "myNav", 1, "overlay"], ["href", "javascript:void(0)", "onclick", "closeNav()", 1, "closebtn"], [1, "overlay-content"], ["href", "/", 1, "active"], ["href", "/about"], ["href", "/properties"], ["href", "/products"], ["href", "/services"], ["href", "/contact"], [1, "container-fluid"], [1, "col-xl-8", "col-lg-6", "col-md-6"], [1, "owl-carousel", "owl-theme"], [1, "item", 2, "background-image", "url('./assets/img/slider1.jpg')"], [1, "item", 2, "background-image", "url('./assets/img/slider2.jpg')"], [1, "item", 2, "background-image", "url('./assets/img/slider3.jpg')"], [1, "col-xl-3", "col-lg-5", "col-md-6"], [1, "pageWrapper", "home"], [1, "address"], ["href", "tel:+18768138622"], [1, "contact"], [1, "info"], [1, "feature"], [1, "featureText"], [1, "featureText2"], [1, "terms"], ["href", "/legal/terms-of-service"], ["href", "/legal/privacy-policy"], ["href", "https://setibjamaica.com", "target", "_blank"], [1, "col-xl-1", "col-lg-1", "col-md-0", "hide"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "flex-column", "p-3", "rightMenu"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "flex-column"], [1, "nav-item", "active"], ["aria-current", "page", "href", "/", 1, "nav-link"], [1, "nav-item"], ["href", "/about", 1, "nav-link"], ["href", "/properties", 1, "nav-link"], ["href", "/products", 1, "nav-link"], ["href", "/services", 1, "nav-link"], ["href", "/contact", 1, "nav-link"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u2630");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Properties");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16)(26, "div", 1)(27, "div", 17)(28, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 19)(30, "div", 20)(31, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22)(33, "div", 23)(34, "div", 3)(35, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24)(38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Rosehall, Montego Bay, St. James, Jamaica");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "(876) 813-8622");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26)(43, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27)(46, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " At Shevnna, we are dedicated to providing comprehensive solutions for your home and lifestyle needs. Whether you're seeking a new rental property, planning a home renovation, enhancing your home decor, or organizing a memorable event, we have the expertise and services to make it happen. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Read more");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28)(51, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "FEATURED SERVICES");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " \u2022 Property Rentals \u2022 Home Renovations ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u2022 Home Decor \u2022 Event Essentials ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31)(58, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Terms of Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " | ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span")(64, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Powered by Setib Business Solutions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35)(67, "nav", 36)(68, "div", 37)(69, "ul", 38)(70, "li", 39)(71, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 41)(74, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 41)(77, "a", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Properties");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 41)(80, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 41)(83, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 41)(86, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map