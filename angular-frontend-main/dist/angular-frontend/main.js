"use strict";
(self["webpackChunkangular_frontend"] = self["webpackChunkangular_frontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 7195);
/* harmony import */ var _pages_hr_hr_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/hr/hr-dashboard.component */ 1456);
/* harmony import */ var _pages_candidate_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/candidate/candidate-dashboard.component */ 7206);
/* harmony import */ var _pages_candidate_online_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/candidate/online-test.component */ 9156);
/* harmony import */ var _pages_interviewer_interviewer_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/interviewer/interviewer-dashboard.component */ 58);
/* harmony import */ var _pages_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/onboarding-form/onboarding-form.component */ 4459);
/* harmony import */ var _pages_hr_hr_onboarding_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/hr/hr-onboarding-details.component */ 1038);
/* harmony import */ var _pages_hr_hr_create_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/hr/hr-create-employee.component */ 1367);
/* harmony import */ var _pages_hr_hr_employee_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/hr/hr-employee-details.component */ 6299);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
var _AppRoutingModule;













const routes = [{
  path: '',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'hr/dashboard',
  component: _pages_hr_hr_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.HrDashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
  data: {
    role: 'HR'
  }
}, {
  path: 'candidate/dashboard',
  component: _pages_candidate_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.CandidateDashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
  data: {
    role: 'CANDIDATE'
  }
}, {
  path: 'candidate/test/:applicationId',
  component: _pages_candidate_online_test_component__WEBPACK_IMPORTED_MODULE_3__.OnlineTestComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
  data: {
    role: 'CANDIDATE'
  }
}, {
  path: 'interviewer/:id',
  component: _pages_interviewer_interviewer_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.InterviewerDashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
  data: {
    role: 'INTERVIEWER'
  }
}, {
  path: 'onboarding',
  component: _pages_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_5__.OnboardingFormComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
  data: {
    role: 'CANDIDATE'
  }
}, {
  path: 'hr/onboarding/:email',
  component: _pages_hr_hr_onboarding_details_component__WEBPACK_IMPORTED_MODULE_6__.HrOnboardingDetailsComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
  data: {
    role: 'HR'
  }
}, {
  path: 'hr/create-employee/:email',
  component: _pages_hr_hr_create_employee_component__WEBPACK_IMPORTED_MODULE_7__.HrCreateEmployeeComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
  data: {
    role: 'HR'
  }
}, {
  path: 'hr/employee/:email',
  component: _pages_hr_hr_employee_details_component__WEBPACK_IMPORTED_MODULE_8__.HrEmployeeDetailsComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
  data: {
    role: 'HR'
  }
}];
class AppRoutingModule {}
_AppRoutingModule = AppRoutingModule;
_AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: _AppRoutingModule
});
_AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
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
var _AppComponent;


class AppComponent {}
_AppComponent = AppComponent;
_AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 7195);
/* harmony import */ var _pages_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/onboarding-form/onboarding-form.component */ 4459);
/* harmony import */ var _pages_candidate_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/candidate/candidate-dashboard.component */ 7206);
/* harmony import */ var _pages_candidate_online_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/candidate/online-test.component */ 9156);
/* harmony import */ var _pages_interviewer_interviewer_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/interviewer/interviewer-dashboard.component */ 58);
/* harmony import */ var _pages_hr_hr_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/hr/hr-dashboard.component */ 1456);
/* harmony import */ var _pages_hr_hr_onboarding_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/hr/hr-onboarding-details.component */ 1038);
/* harmony import */ var _pages_hr_hr_create_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/hr/hr-create-employee.component */ 1367);
/* harmony import */ var _pages_hr_hr_employee_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/hr/hr-employee-details.component */ 6299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
var _AppModule;















class AppModule {}
_AppModule = AppModule;
_AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: _AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_3__.OnboardingFormComponent, _pages_candidate_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.CandidateDashboardComponent, _pages_candidate_online_test_component__WEBPACK_IMPORTED_MODULE_5__.OnlineTestComponent, _pages_interviewer_interviewer_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.InterviewerDashboardComponent, _pages_hr_hr_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.HrDashboardComponent, _pages_hr_hr_onboarding_details_component__WEBPACK_IMPORTED_MODULE_8__.HrOnboardingDetailsComponent, _pages_hr_hr_create_employee_component__WEBPACK_IMPORTED_MODULE_9__.HrCreateEmployeeComponent, _pages_hr_hr_employee_details_component__WEBPACK_IMPORTED_MODULE_10__.HrEmployeeDetailsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule]
  });
})();

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
var _AuthGuard;



class AuthGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate(route, state) {
    const user = this.auth.user;
    const requiredRole = route.data['role'];
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }
    if (requiredRole && user.role !== requiredRole) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
_AuthGuard = AuthGuard;
_AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _AuthGuard,
  factory: _AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7206:
/*!******************************************************************!*\
  !*** ./src/app/pages/candidate/candidate-dashboard.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidateDashboardComponent: () => (/* binding */ CandidateDashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ 954);
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);


var _CandidateDashboardComponent;






function CandidateDashboardComponent_div_11_button_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Applied");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CandidateDashboardComponent_div_11_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_11_ng_template_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.selectInternship(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CandidateDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p")(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p")(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "CTC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p")(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CandidateDashboardComponent_div_11_button_19_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CandidateDashboardComponent_div_11_ng_template_20_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r0.card);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r3.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r3.workLocation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r3.ctc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r3.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.hasApplied(i_r3.id))("ngIfElse", _r5);
  }
}
function CandidateDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CandidateDashboardComponent_div_12_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.candidateName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CandidateDashboardComponent_div_12_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CandidateDashboardComponent_div_12_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.degree = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CandidateDashboardComponent_div_12_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.college = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CandidateDashboardComponent_div_12_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.cgpa = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CandidateDashboardComponent_div_12_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.skills = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CandidateDashboardComponent_div_12_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.onResumeSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_12_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.handleApply());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Submit Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.formBox);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Apply for ", ctx_r1.selectedInternship.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.candidateName)("ngStyle", ctx_r1.input);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.phone)("ngStyle", ctx_r1.input);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.degree)("ngStyle", ctx_r1.input);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.college)("ngStyle", ctx_r1.input);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.cgpa)("ngStyle", ctx_r1.input);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.skills)("ngStyle", ctx_r1.input);
  }
}
function CandidateDashboardComponent_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_15_div_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const app_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.router.navigate(["/candidate/test", app_r19.id]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Take Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const app_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Test active till ", ctx_r20.formatDate(app_r19.testDate), "");
  }
}
function CandidateDashboardComponent_div_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Online Test-Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CandidateDashboardComponent_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Online Test-Not Cleared");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CandidateDashboardComponent_div_15_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_15_div_8_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const app_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.updateOfferStatus(app_r19.id, "ACCEPTED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_15_div_8_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const app_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.updateOfferStatus(app_r19.id, "REJECTED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CandidateDashboardComponent_div_15_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CandidateDashboardComponent_div_15_div_8_div_4_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const app_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.onSignedOfferSelected(app_r19.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_15_div_8_div_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const app_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.uploadSignedOffer(app_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Upload Signed Offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CandidateDashboardComponent_div_15_div_8_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28)(2, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Welcome to the Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Employee ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p")(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Date of Joining:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Reporting Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p")(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Manager:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p")(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Manager Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p")(29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Manager Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r41.employee.employeeId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r41.employee.dateOfJoining, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r41.employee.reportingTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r41.employee.workLocation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r41.employee.managerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r41.employee.managerEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r41.employee.managerContact, "");
  }
}
function CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);
      const app_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4).$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.router.navigate(["/onboarding"], {
        state: {
          applicationId: app_r19.id
        }
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Fill Onboarding Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Onboarding submitted \u2013 waiting for HR verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Onboarding verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Onboarding rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Offer Process-Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_button_3_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_p_4_Template, 2, 0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_p_5_Template, 2, 0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_p_6_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r42.onboardingStatus === null || ctx_r42.onboardingStatus === "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r42.onboardingStatus === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r42.onboardingStatus === "VERIFIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r42.onboardingStatus === "REJECTED");
  }
}
function CandidateDashboardComponent_div_15_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CandidateDashboardComponent_div_15_div_8_div_5_ng_container_1_Template, 32, 7, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CandidateDashboardComponent_div_15_div_8_div_5_ng_container_2_Template, 7, 4, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r30.employee);
  }
}
function CandidateDashboardComponent_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Download Offer Letter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CandidateDashboardComponent_div_15_div_8_div_3_Template, 5, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CandidateDashboardComponent_div_15_div_8_div_4_Template, 4, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateDashboardComponent_div_15_div_8_div_5_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const app_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "http://localhost:8080/offers/" + app_r19.offerLetterFile, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r19.offerStatus === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r19.offerStatus === "ACCEPTED" && !app_r19.signedOfferLetter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r19.signedOfferLetter);
  }
}
function CandidateDashboardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CandidateDashboardComponent_div_15_div_5_Template, 5, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CandidateDashboardComponent_div_15_div_6_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CandidateDashboardComponent_div_15_div_7_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CandidateDashboardComponent_div_15_div_8_Template, 6, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const app_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r2.card);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r2.getInternship(app_r19)) == null ? null : tmp_1_0.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_2_0 = ctx_r2.getInternship(app_r19)) == null ? null : tmp_2_0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r19.status === "TEST_ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r19.status === "TEST_PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r19.status === "TEST_FAILED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r19.offerLetterFile && app_r19.offerStatus !== "REJECTED");
  }
}
class CandidateDashboardComponent {
  constructor(auth, http, router) {
    this.auth = auth;
    this.http = http;
    this.router = router;
    this.internships = [];
    this.applications = [];
    this.selectedInternship = null;
    this.candidateName = '';
    this.phone = '';
    this.degree = '';
    this.college = '';
    this.cgpa = '';
    this.skills = '';
    this.resume = null;
    this.signedFiles = {};
    this.onboardingStatus = null;
    this.latestSignedOfferId = null;
    this.employee = null;
    // styles used by template
    this.card = {
      border: '1px solid #e5e7eb',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
      background: '#ffffff',
      color: '#111827'
    };
    this.input = {
      width: '100%',
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      color: '#111827'
    };
    this.formBox = {
      marginTop: '30px',
      padding: '20px',
      background: '#ffffff',
      borderRadius: '10px',
      border: '1px solid #e5e7eb'
    };
  }
  ngOnInit() {
    var _this$auth$user;
    if (!((_this$auth$user = this.auth.user) !== null && _this$auth$user !== void 0 && _this$auth$user.email)) return;
    this.fetchInternships();
    this.fetchApplications();
    this.fetchEmployee();
    this.intervalId = setInterval(() => {
      this.fetchApplications();
      this.fetchOnboarding();
    }, 5000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  fetchOnboarding() {
    var _this = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      if (!_this.latestSignedOfferId) {
        _this.onboardingStatus = null;
        return;
      }
      try {
        const res = yield _this.http.get(`http://localhost:8080/api/onboarding/application/${_this.latestSignedOfferId}`).toPromise();
        _this.onboardingStatus = res.length > 0 ? res[res.length - 1].status : null;
      } catch (err) {
        console.error(err);
        _this.onboardingStatus = null;
      }
    })();
  }
  fetchEmployee() {
    var _this2 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var _this2$auth$user;
      if (!((_this2$auth$user = _this2.auth.user) !== null && _this2$auth$user !== void 0 && _this2$auth$user.email)) return;
      try {
        _this2.employee = yield _this2.http.get(`http://localhost:8080/api/employees/${_this2.auth.user.email}`).toPromise();
      } catch (err) {
        _this2.employee = null;
      }
    })();
  }
  fetchInternships() {
    var _this3 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        _this3.internships = yield _this3.http.get('http://localhost:8080/api/internships').toPromise();
      } catch (err) {
        console.error(err);
      }
    })();
  }
  fetchApplications() {
    var _this4 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        const res = yield _this4.http.get('http://localhost:8080/api/applications').toPromise();
        const filtered = res.filter(app => {
          var _this4$auth$user;
          return app.email === ((_this4$auth$user = _this4.auth.user) === null || _this4$auth$user === void 0 ? void 0 : _this4$auth$user.email);
        });
        _this4.applications = filtered;
        const signed = filtered.filter(app => app.signedOfferLetter).slice(-1)[0];
        _this4.latestSignedOfferId = (signed === null || signed === void 0 ? void 0 : signed.id) || null;
        _this4.fetchOnboarding();
      } catch (err) {
        console.error(err);
      }
    })();
  }
  hasApplied(internshipId) {
    return this.applications.some(app => app.internshipId === internshipId);
  }
  selectInternship(i) {
    this.selectedInternship = i;
  }
  onResumeSelected(e) {
    var _e$target$files;
    this.resume = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
  }
  handleApply() {
    var _this5 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var _this5$auth$user;
      if (!_this5.resume) return alert('Please upload resume');
      const form = new FormData();
      form.append('internshipId', _this5.selectedInternship.id);
      form.append('candidateName', _this5.candidateName);
      form.append('email', ((_this5$auth$user = _this5.auth.user) === null || _this5$auth$user === void 0 ? void 0 : _this5$auth$user.email) || '');
      form.append('phone', _this5.phone);
      form.append('degree', _this5.degree);
      form.append('college', _this5.college);
      form.append('cgpa', _this5.cgpa);
      form.append('skills', _this5.skills);
      form.append('resume', _this5.resume);
      yield _this5.http.post('http://localhost:8080/api/applications/apply', form).toPromise();
      alert('Application submitted!');
      _this5.selectedInternship = null;
      _this5.candidateName = _this5.phone = _this5.degree = _this5.college = _this5.cgpa = _this5.skills = '';
      _this5.resume = null;
      _this5.fetchApplications();
    })();
  }
  getInternship(app) {
    return this.internships.find(i => i.id === app.internshipId);
  }
  formatDate(dateString) {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  updateOfferStatus(id, status) {
    this.http.post('http://localhost:8080/api/applications/offer-status', null, {
      params: {
        applicationId: id,
        status
      }
    }).toPromise().then(() => this.fetchApplications());
  }
  onSignedOfferSelected(id, e) {
    var _e$target$files2;
    this.signedFiles = (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.signedFiles), {}, {
      [id]: (_e$target$files2 = e.target.files) === null || _e$target$files2 === void 0 ? void 0 : _e$target$files2[0]
    });
  }
  uploadSignedOffer(id) {
    var _this6 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      const file = _this6.signedFiles[id];
      if (!file) return alert('Upload signed offer');
      const form = new FormData();
      form.append('applicationId', id);
      form.append('file', file);
      yield _this6.http.post('http://localhost:8080/api/applications/upload-signed-offer', form).toPromise();
      alert('Signed offer uploaded');
      _this6.signedFiles = (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this6.signedFiles), {}, {
        [id]: null
      });
      _this6.fetchApplications();
    })();
  }
}
_CandidateDashboardComponent = CandidateDashboardComponent;
_CandidateDashboardComponent.ɵfac = function CandidateDashboardComponent_Factory(t) {
  return new (t || _CandidateDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
_CandidateDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _CandidateDashboardComponent,
  selectors: [["app-candidate-dashboard"]],
  decls: 16,
  vars: 4,
  consts: [[2, "padding", "30px", "font-family", "Arial"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "color", "gray", "margin", "0"], [2, "padding", "8px 16px", "background", "black", "color", "white", "border", "none", "border-radius", "6px", "cursor", "pointer", 3, "click"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngStyle", 4, "ngIf"], [2, "margin-top", "40px"], [3, "ngStyle"], [2, "text-align", "center", "color", "#111827"], ["disabled", "", "style", "padding:6px 12px;background:#e5e7eb;color:#374151;border:none;border-radius:6px", 4, "ngIf", "ngIfElse"], ["canApply", ""], ["disabled", "", 2, "padding", "6px 12px", "background", "#e5e7eb", "color", "#374151", "border", "none", "border-radius", "6px"], [2, "padding", "6px 12px", "background", "#111827", "color", "white", "border", "none", "border-radius", "6px", 3, "click"], ["placeholder", "Full Name", 3, "ngModel", "ngStyle", "ngModelChange"], ["placeholder", "Phone", 3, "ngModel", "ngStyle", "ngModelChange"], ["placeholder", "Degree", 3, "ngModel", "ngStyle", "ngModelChange"], ["placeholder", "College", 3, "ngModel", "ngStyle", "ngModelChange"], ["placeholder", "CGPA", 3, "ngModel", "ngStyle", "ngModelChange"], ["placeholder", "Skills", 3, "ngModel", "ngStyle", "ngModelChange"], ["type", "file", "accept", "application/pdf", 3, "change"], [2, "margin-top", "15px", "padding", "10px 20px", "background", "#111827", "color", "white", "border", "none", "border-radius", "6px", "cursor", "pointer", 3, "click"], [4, "ngIf"], [2, "padding", "8px 15px", "background", "#111827", "color", "#fff", "border", "none", "border-radius", "6px", "margin-top", "10px", 3, "click"], [2, "color", "#111827"], [2, "color", "red", "font-weight", "bold"], ["target", "_blank", 3, "href"], [3, "click"], ["type", "file", 3, "change"], [2, "margin-top", "15px", "padding", "15px", "border", "1px solid white", "border-radius", "8px", "background", "white"], [2, "color", "#16a34a"], [2, "color", "black"], ["style", "margin-top:10px;padding:8px 14px;background:#111827;color:white;border:none;border-radius:6px;cursor:pointer", 3, "click", 4, "ngIf"], ["style", "color:orange;margin-top:10px", 4, "ngIf"], ["style", "color:green;margin-top:10px", 4, "ngIf"], ["style", "color:red;margin-top:10px", 4, "ngIf"], [2, "margin-top", "10px", "padding", "8px 14px", "background", "#111827", "color", "white", "border", "none", "border-radius", "6px", "cursor", "pointer", 3, "click"], [2, "color", "orange", "margin-top", "10px"], [2, "color", "green", "margin-top", "10px"], [2, "color", "red", "margin-top", "10px"]],
  template: function CandidateDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Candidate Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CandidateDashboardComponent_Template_button_click_7_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Available Internships");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CandidateDashboardComponent_div_11_Template, 22, 8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CandidateDashboardComponent_div_12_Template, 12, 14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "My Applications");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CandidateDashboardComponent_div_15_Template, 9, 7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.auth.user == null ? null : ctx.auth.user.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.internships);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedInternship);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.applications);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
  encapsulation: 2
});

/***/ }),

/***/ 9156:
/*!**********************************************************!*\
  !*** ./src/app/pages/candidate/online-test.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnlineTestComponent: () => (/* binding */ OnlineTestComponent)
/* harmony export */ });
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);

var _OnlineTestComponent;




function OnlineTestComponent_div_3_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OnlineTestComponent_div_3_label_5_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const opt_r3 = restoredCtx.$implicit;
      const q_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.selectAnswer(q_r1.id, opt_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const q_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "q-" + q_r1.id)("value", opt_r3)("checked", ctx_r2.answers[q_r1.id] === opt_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", opt_r3, " ");
  }
}
function OnlineTestComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 4)(2, "p")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OnlineTestComponent_div_3_label_5_Template, 3, 4, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", q_r1.id, ". ", q_r1.q, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", q_r1.options);
  }
}
class OnlineTestComponent {
  constructor(route, http, router) {
    this.route = route;
    this.http = http;
    this.router = router;
    this.applicationId = null;
    this.answers = {};
    this.submitting = false;
    this.questions = [{
      id: 1,
      q: '2 + 3 = ?',
      options: ['4', '5', '6'],
      answer: '5'
    }, {
      id: 2,
      q: 'Capital of India?',
      options: ['Delhi', 'Mumbai', 'Chennai'],
      answer: 'Delhi'
    }, {
      id: 3,
      q: '5 * 6 = ?',
      options: ['30', '25', '20'],
      answer: '30'
    }, {
      id: 4,
      q: 'Java is ?',
      options: ['Language', 'Database', 'Browser'],
      answer: 'Language'
    }, {
      id: 5,
      q: 'HTML stands for?',
      options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Home Tool Markup Language'],
      answer: 'Hyper Text Markup Language'
    }, {
      id: 6,
      q: '10 / 2 = ?',
      options: ['2', '5', '8'],
      answer: '5'
    }, {
      id: 7,
      q: 'React is used for?',
      options: ['Frontend', 'Backend', 'Database'],
      answer: 'Frontend'
    }, {
      id: 8,
      q: '15 - 5 = ?',
      options: ['5', '10', '15'],
      answer: '10'
    }, {
      id: 9,
      q: 'Spring Boot is ?',
      options: ['Framework', 'IDE', 'Browser'],
      answer: 'Framework'
    }, {
      id: 10,
      q: 'Which is OOP?',
      options: ['Java', 'HTML', 'CSS'],
      answer: 'Java'
    }, {
      id: 11,
      q: 'Binary of 2?',
      options: ['10', '11', '01'],
      answer: '10'
    }, {
      id: 12,
      q: 'Largest planet?',
      options: ['Earth', 'Mars', 'Jupiter'],
      answer: 'Jupiter'
    }, {
      id: 13,
      q: 'Which is database?',
      options: ['MySQL', 'React', 'Node'],
      answer: 'MySQL'
    }, {
      id: 14,
      q: '3^2 = ?',
      options: ['6', '9', '12'],
      answer: '9'
    }, {
      id: 15,
      q: 'CSS is used for?',
      options: ['Styling', 'Logic', 'Database'],
      answer: 'Styling'
    }];
    this.applicationId = this.route.snapshot.paramMap.get('applicationId');
  }
  selectAnswer(qid, opt) {
    this.answers[qid] = opt;
  }
  submitTest() {
    var _this = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.submitting) return;
      if (Object.keys(_this.answers).length < _this.questions.length) {
        alert('Please answer all 15 questions before submitting.');
        return;
      }
      let score = 0;
      _this.questions.forEach(q => {
        if (_this.answers[q.id] === q.answer) score++;
      });
      try {
        _this.submitting = true;
        yield _this.http.post('http://localhost:8080/api/applications/submit-test', null, {
          params: {
            applicationId: _this.applicationId,
            score
          }
        }).toPromise();
        alert(`Test Submitted Successfully!\nScore: ${score}/15`);
        _this.router.navigate(['/candidate/dashboard']);
      } catch (err) {
        alert('Error submitting test');
      } finally {
        _this.submitting = false;
      }
    })();
  }
}
_OnlineTestComponent = OnlineTestComponent;
_OnlineTestComponent.ɵfac = function OnlineTestComponent_Factory(t) {
  return new (t || _OnlineTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_OnlineTestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _OnlineTestComponent,
  selectors: [["app-online-test"]],
  decls: 6,
  vars: 6,
  consts: [[2, "max-width", "700px", "margin", "auto", "padding", "20px"], [2, "margin-bottom", "20px"], [4, "ngFor", "ngForOf"], [3, "disabled", "click"], [2, "margin-bottom", "18px"], ["style", "display:block;margin-bottom:5px", 4, "ngFor", "ngForOf"], [2, "display", "block", "margin-bottom", "5px"], ["type", "radio", 3, "name", "value", "checked", "change"]],
  template: function OnlineTestComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Online Test");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OnlineTestComponent_div_3_Template, 6, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnlineTestComponent_Template_button_click_4_listener() {
        return ctx.submitTest();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questions);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("margin-top:20px;padding:10px 18px;background:", ctx.submitting ? "#888" : "#000", ";color:#fff;border:none;border-radius:4px;cursor:pointer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.submitting);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.submitting ? "Submitting..." : "Submit Test");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  encapsulation: 2
});

/***/ }),

/***/ 1367:
/*!**********************************************************!*\
  !*** ./src/app/pages/hr/hr-create-employee.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HrCreateEmployeeComponent: () => (/* binding */ HrCreateEmployeeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ 954);
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);


var _HrCreateEmployeeComponent;





function HrCreateEmployeeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HrCreateEmployeeComponent_div_3_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const key_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.form[key_r1] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", key_r1)("placeholder", key_r1)("ngModel", ctx_r0.form[key_r1]);
  }
}
class HrCreateEmployeeComponent {
  constructor(route, http, router) {
    this.route = route;
    this.http = http;
    this.router = router;
    this.form = {
      name: '',
      contactNumber: '',
      department: '',
      designation: '',
      workLocation: '',
      workMode: '',
      employmentType: '',
      dateOfJoining: '',
      reportingTime: '',
      managerName: '',
      managerEmail: '',
      managerContact: '',
      accommodation: '',
      officialEmail: ''
    };
    this.email = this.route.snapshot.paramMap.get('email');
  }
  get formKeys() {
    return Object.keys(this.form);
  }
  handleSubmit() {
    var _this = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        yield _this.http.post('http://localhost:8080/api/employees', (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.form), {}, {
          email: _this.email
        })).toPromise();
        alert('Employee Created & Mail Sent ✅');
        _this.router.navigate(['/hr/dashboard']);
      } catch (err) {
        console.error(err);
        alert('Error creating employee');
      }
    })();
  }
}
_HrCreateEmployeeComponent = HrCreateEmployeeComponent;
_HrCreateEmployeeComponent.ɵfac = function HrCreateEmployeeComponent_Factory(t) {
  return new (t || _HrCreateEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_HrCreateEmployeeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _HrCreateEmployeeComponent,
  selectors: [["app-hr-create-employee"]],
  decls: 6,
  vars: 1,
  consts: [[2, "padding", "30px"], [4, "ngFor", "ngForOf"], [3, "click"], [2, "display", "block", "margin-bottom", "10px", "padding", "8px", 3, "name", "placeholder", "ngModel", "ngModelChange"]],
  template: function HrCreateEmployeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Create Employee");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HrCreateEmployeeComponent_div_3_Template, 2, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HrCreateEmployeeComponent_Template_button_click_4_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.formKeys);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
  encapsulation: 2
});

/***/ }),

/***/ 1456:
/*!****************************************************!*\
  !*** ./src/app/pages/hr/hr-dashboard.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HrDashboardComponent: () => (/* binding */ HrDashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ 954);
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);


var _HrDashboardComponent;







function HrDashboardComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.handlePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Post Internship");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HrDashboardComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p")(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Company:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p")(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Place:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "CTC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p")(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_21_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.handleDelete(i_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r6.companyName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r6.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r6.ctc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r6.description, "");
  }
}
function HrDashboardComponent_div_25_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Offer Letter-- Sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HrDashboardComponent_div_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "View Signed Offer Letter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "http://localhost:8080/signed-offers/" + app_r9.signedOfferLetter, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function HrDashboardComponent_div_25_div_10_ng_container_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_25_div_10_ng_container_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.router.navigate(["/hr/onboarding", app_r9.email]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "View Onboarding Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HrDashboardComponent_div_25_div_10_ng_container_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_25_div_10_ng_container_1_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.router.navigate(["/hr/create-employee", app_r9.email]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Create Employee Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HrDashboardComponent_div_25_div_10_ng_container_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_25_div_10_ng_container_1_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.router.navigate(["/hr/employee", app_r9.email]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "View Employee Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HrDashboardComponent_div_25_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Onboarding Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HrDashboardComponent_div_25_div_10_ng_container_1_button_6_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HrDashboardComponent_div_25_div_10_ng_container_1_button_7_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HrDashboardComponent_div_25_div_10_ng_container_1_button_8_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r17.statusColor(ctx_r17.getOnboardingRecord(app_r9).status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.getOnboardingRecord(app_r9).status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.getOnboardingRecord(app_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.getOnboardingRecord(app_r9) && ctx_r17.getOnboardingRecord(app_r9).status === "VERIFIED" && !ctx_r17.employeeExists(app_r9.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.employeeExists(app_r9.email));
  }
}
function HrDashboardComponent_div_25_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HrDashboardComponent_div_25_div_10_ng_container_1_Template, 9, 6, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.getOnboardingRecord(app_r9));
  }
}
function HrDashboardComponent_div_25_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_25_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.updateHrResult(app_r9.id, "HR_PASSED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_25_div_11_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.updateHrResult(app_r9.id, "HR_FAILED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HrDashboardComponent_div_25_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function HrDashboardComponent_div_25_div_12_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.handleOfferFileChange(app_r9.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_25_div_12_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.uploadOfferLetter(app_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Upload Offer Letter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HrDashboardComponent_div_25_div_13_select_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function HrDashboardComponent_div_25_div_13_select_10_Template_select_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r43.handleInputChange(app_r9.id, "interviewerId", $event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Interviewer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Kavya");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Arun");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Divya");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HrDashboardComponent_div_25_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function HrDashboardComponent_div_25_div_13_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r46.handleInputChange(app_r9.id, "date", $event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function HrDashboardComponent_div_25_div_13_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.handleInputChange(app_r9.id, "time", $event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function HrDashboardComponent_div_25_div_13_Template_select_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r51.handleInputChange(app_r9.id, "mode", $event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, HrDashboardComponent_div_25_div_13_select_10_Template, 9, 0, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_25_div_13_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r53.scheduleInterview(app_r9.id, app_r9.status));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const app_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r9.status !== "HR_PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r15.scheduleLabel(app_r9));
  }
}
function HrDashboardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_25_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r57);
      const app_r9 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r56.selectedCandidate = app_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 15)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Test Cleared");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HrDashboardComponent_div_25_div_8_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HrDashboardComponent_div_25_div_9_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, HrDashboardComponent_div_25_div_10_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, HrDashboardComponent_div_25_div_11_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, HrDashboardComponent_div_25_div_12_Template, 4, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, HrDashboardComponent_div_25_div_13_Template, 13, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const app_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](app_r9.candidateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r9.signedOfferLetter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r9.signedOfferLetter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r9.signedOfferLetter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r9.interviewStatus === "HR_SCHEDULED" && app_r9.status !== "SELECTED" && app_r9.status !== "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", app_r9.status === "SELECTED" && !app_r9.offerLetterFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.showScheduleOptions(app_r9));
  }
}
function HrDashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Candidate Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p")(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p")(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p")(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Degree:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p")(20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "College:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p")(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "CGPA:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p")(28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Skills:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Download Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "br")(34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_div_26_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r58.selectedCandidate = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedCandidate.candidateName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedCandidate.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedCandidate.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedCandidate.degree, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedCandidate.college, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedCandidate.cgpa, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedCandidate.skills, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "http://localhost:8080/resumes/" + ctx_r3.selectedCandidate.resumeFileName, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
class HrDashboardComponent {
  constructor(auth, http, router) {
    this.auth = auth;
    this.http = http;
    this.router = router;
    this.title = '';
    this.location = '';
    this.ctc = '';
    this.description = '';
    this.companyName = '';
    this.internships = [];
    this.applications = [];
    this.scheduleData = {};
    this.selectedCandidate = null;
    this.offerFiles = {};
    this.pdfFile = null;
    this.uploadedFileName = '';
    this.pdfUploaded = false;
    this.onboardingList = [];
    this.employeeList = [];
  }
  ngOnInit() {
    if (!this.auth.user || this.auth.user.role !== 'HR') {
      this.router.navigate(['/']);
      return;
    }
    this.fetchAll();
    this.intervalId = setInterval(() => this.fetchAll(), 5000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  fetchAll() {
    this.fetchInternships();
    this.fetchApplications();
    this.fetchOnboarding();
    this.fetchEmployees();
  }
  formatDate(dateString) {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  formatTime(time) {
    if (!time) return '';
    const [h, m] = time.split(':');
    const d = new Date();
    d.setHours(Number(h), Number(m));
    return d.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  getInterviewerName(id) {
    return id === 1 ? 'Kavya' : id === 2 ? 'Arun' : id === 3 ? 'Divya' : '';
  }
  fetchOnboarding() {
    var _this = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        const res = yield _this.http.get('http://localhost:8080/api/onboarding').toPromise();
        _this.onboardingList = res || [];
      } catch (err) {
        console.error(err);
      }
    })();
  }
  fetchInternships() {
    var _this2 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        _this2.internships = yield _this2.http.get('http://localhost:8080/api/internships').toPromise();
      } catch (err) {
        console.error(err);
      }
    })();
  }
  fetchApplications() {
    var _this3 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        _this3.applications = yield _this3.http.get('http://localhost:8080/api/applications').toPromise();
      } catch (err) {
        console.error(err);
      }
    })();
  }
  handleOfferFileChange(id, event) {
    var _event$target$files;
    const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
    this.offerFiles = (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.offerFiles), {}, {
      [id]: file
    });
  }
  uploadOfferLetter(id) {
    var _this4 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      const file = _this4.offerFiles[id];
      if (!file) return alert('Select offer letter');
      const form = new FormData();
      form.append('applicationId', id);
      form.append('file', file);
      yield _this4.http.post('http://localhost:8080/api/applications/upload-offer-letter', form).toPromise();
      _this4.fetchApplications();
    })();
  }
  updateOnboardingStatus(id, status) {
    var _this5 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      yield _this5.http.put(`http://localhost:8080/api/onboarding/update/${id}/${status}`, {}).toPromise();
      _this5.fetchOnboarding();
    })();
  }
  onPdfSelected(e) {
    var _e$target$files;
    this.pdfFile = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
  }
  handlePdfUpload() {
    var _this6 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      if (!_this6.pdfFile) return alert('Select PDF');
      const form = new FormData();
      form.append('file', _this6.pdfFile);
      const res = yield _this6.http.post('http://localhost:8080/api/internships/upload-pdf', form).toPromise();
      _this6.uploadedFileName = res;
      _this6.pdfUploaded = true;
    })();
  }
  handlePost() {
    var _this7 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      if (!_this7.pdfUploaded) return alert('Upload PDF first');
      const form = new FormData();
      form.append('companyName', _this7.companyName);
      form.append('title', _this7.title);
      form.append('location', _this7.location);
      form.append('ctc', _this7.ctc);
      form.append('description', _this7.description);
      form.append('pdfFileName', _this7.uploadedFileName);
      yield _this7.http.post('http://localhost:8080/api/internships/post', form).toPromise();
      _this7.companyName = _this7.title = _this7.location = _this7.ctc = _this7.description = '';
      _this7.pdfUploaded = false;
      _this7.pdfFile = null;
      _this7.fetchInternships();
    })();
  }
  handleDelete(id) {
    var _this8 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      yield _this8.http.delete(`http://localhost:8080/api/internships/${id}`).toPromise();
      _this8.fetchInternships();
    })();
  }
  handleInputChange(appId, field, value) {
    this.scheduleData = (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.scheduleData), {}, {
      [appId]: (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.scheduleData[appId] || {}), {}, {
        [field]: value
      })
    });
  }
  scheduleInterview(appId, status) {
    var _this9 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      const data = _this9.scheduleData[appId];
      if (!(data !== null && data !== void 0 && data.date) || !(data !== null && data !== void 0 && data.time) || !(data !== null && data !== void 0 && data.mode)) {
        return alert('Fill all fields');
      }
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('applicationId', appId).set('level', status === 'TEST_PASSED' ? 'L1' : status === 'L2_PENDING' ? 'L2' : 'HR').set('date', data.date).set('time', data.time).set('mode', data.mode).set('interviewerId', data.interviewerId || '');
      yield _this9.http.post('http://localhost:8080/api/applications/schedule-interview', null, {
        params
      }).toPromise();
      _this9.fetchApplications();
    })();
  }
  fetchEmployees() {
    var _this0 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        _this0.employeeList = yield _this0.http.get('http://localhost:8080/api/employees').toPromise();
      } catch (err) {
        console.error(err);
      }
    })();
  }
  updateHrResult(id, result) {
    var _this1 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      yield _this1.http.post('http://localhost:8080/api/applications/hr-result', null, {
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('applicationId', id).set('result', result)
      }).toPromise();
      _this1.fetchApplications();
    })();
  }
  getOnboardingRecord(app) {
    return this.onboardingList.filter(ob => ob.applicationId === app.id).slice(-1)[0];
  }
  statusColor(status) {
    if (!status) return '#9ca3af';
    return status === 'VERIFIED' ? 'green' : status === 'REJECTED' ? 'red' : 'orange';
  }
  employeeExists(email) {
    return !!this.employeeList.find(emp => emp.email === email);
  }
  showScheduleOptions(app) {
    return app.status === 'TEST_PASSED' && app.interviewStatus !== 'L1_SCHEDULED' || app.status === 'L2_PENDING' && app.interviewStatus !== 'L2_SCHEDULED' || app.status === 'HR_PENDING' && app.interviewStatus !== 'HR_SCHEDULED' || app.l1InterviewerStatus === 'REJECTED' || app.l2InterviewerStatus === 'REJECTED';
  }
  scheduleLabel(app) {
    return app.status === 'TEST_PASSED' ? 'Schedule L1' : app.status === 'L2_PENDING' ? 'Schedule L2' : 'Schedule HR';
  }
}
_HrDashboardComponent = HrDashboardComponent;
_HrDashboardComponent.ɵfac = function HrDashboardComponent_Factory(t) {
  return new (t || _HrDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
_HrDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _HrDashboardComponent,
  selectors: [["app-hr-dashboard"]],
  decls: 27,
  vars: 9,
  consts: [[2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "padding", "8px 16px", "background", "black", "color", "#fff", "border", "none", "border-radius", "6px", "cursor", "pointer", 3, "click"], [2, "border", "1px solid black", "padding", "20px", "margin-bottom", "25px", "max-width", "600px"], ["placeholder", "Title", 2, "display", "block", "width", "100%", "padding", "8px", "margin-bottom", "10px", "border", "1px solid black", 3, "ngModel", "ngModelChange"], ["placeholder", "Location", 2, "display", "block", "width", "100%", "padding", "8px", "margin-bottom", "10px", "border", "1px solid black", 3, "ngModel", "ngModelChange"], ["placeholder", "CTC", 2, "display", "block", "width", "100%", "padding", "8px", "margin-bottom", "10px", "border", "1px solid black", 3, "ngModel", "ngModelChange"], ["placeholder", "Company Name", 2, "display", "block", "width", "100%", "padding", "8px", "margin-bottom", "10px", "border", "1px solid black", 3, "ngModel", "ngModelChange"], ["placeholder", "Description", 2, "width", "100%", "padding", "8px", "margin-bottom", "10px", "border", "1px solid black", 3, "ngModel", "ngModelChange"], ["type", "file", 2, "margin-bottom", "10px", 3, "change"], [2, "background", "black", "color", "white", "padding", "8px 16px", "border", "none", "margin-right", "10px", "cursor", "pointer", 3, "click"], ["style", "background:black;color:white;padding:8px 16px;border:none;cursor:pointer", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["style", "position:fixed;top:20px;right:20px;width:350px;background:#fff;padding:20px;border:1px solid #ccc;border-radius:10px", 4, "ngIf"], [2, "background", "black", "color", "white", "padding", "8px 16px", "border", "none", "cursor", "pointer", 3, "click"], [3, "click"], [2, "padding-left", "15px"], [4, "ngIf"], [2, "font-weight", "600", "color", "black"], ["target", "_blank", 3, "href"], [2, "font-weight", "600"], ["style", "padding:6px 12px;background:black;color:white;border:none;border-radius:6px;cursor:pointer;margin-right:10px", 3, "click", 4, "ngIf"], ["style", "padding:6px 12px;background:#16a34a;color:white;border:none;border-radius:6px;cursor:pointer", 3, "click", 4, "ngIf"], ["style", "padding:6px 12px;background:black;color:white;border:none;border-radius:6px;cursor:pointer", 3, "click", 4, "ngIf"], [2, "padding", "6px 12px", "background", "black", "color", "white", "border", "none", "border-radius", "6px", "cursor", "pointer", "margin-right", "10px", 3, "click"], [2, "padding", "6px 12px", "background", "#16a34a", "color", "white", "border", "none", "border-radius", "6px", "cursor", "pointer", 3, "click"], [2, "padding", "6px 12px", "background", "black", "color", "white", "border", "none", "border-radius", "6px", "cursor", "pointer", 3, "click"], ["type", "file", 3, "change"], ["type", "date", 3, "change"], ["type", "time", 3, "change"], [3, "change"], ["value", ""], ["value", "ONLINE"], ["value", "OFFLINE"], [3, "change", 4, "ngIf"], ["value", "1"], ["value", "2"], ["value", "3"], [2, "position", "fixed", "top", "20px", "right", "20px", "width", "350px", "background", "#fff", "padding", "20px", "border", "1px solid #ccc", "border-radius", "10px"]],
  template: function HrDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "HR Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_Template_button_click_4_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Post New Internship");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HrDashboardComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HrDashboardComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.location = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HrDashboardComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.ctc = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HrDashboardComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.companyName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HrDashboardComponent_Template_textarea_ngModelChange_13_listener($event) {
        return ctx.description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function HrDashboardComponent_Template_input_change_14_listener($event) {
        return ctx.onPdfSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HrDashboardComponent_Template_button_click_15_listener() {
        return ctx.handlePdfUpload();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Upload PDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, HrDashboardComponent_button_17_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Posted Internships");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, HrDashboardComponent_div_21_Template, 21, 5, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Candidates");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, HrDashboardComponent_div_25_Template, 15, 7, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, HrDashboardComponent_div_26_Template, 37, 8, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.location);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.ctc);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.companyName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pdfUploaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.internships);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.applications);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedCandidate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
  encapsulation: 2
});

/***/ }),

/***/ 6299:
/*!***********************************************************!*\
  !*** ./src/app/pages/hr/hr-employee-details.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HrEmployeeDetailsComponent: () => (/* binding */ HrEmployeeDetailsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);

var _HrEmployeeDetailsComponent;




function HrEmployeeDetailsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HrEmployeeDetailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Employee ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p")(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Department:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p")(22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Designation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p")(26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Employment Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p")(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Work Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p")(34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Work Mode:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p")(38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Date of Joining:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p")(42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Reporting Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Manager Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p")(49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Manager Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p")(53, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Manager Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p")(57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Manager Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p")(62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Accommodation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p")(66, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Official Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p")(70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.employeeId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.contactNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.department, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.designation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.employmentType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.workLocation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.workMode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.dateOfJoining, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.reportingTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.managerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.managerEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.managerContact, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.accommodation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.employee.officialEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.employee.status);
  }
}
class HrEmployeeDetailsComponent {
  constructor(route, http, router) {
    this.route = route;
    this.http = http;
    this.router = router;
    this.email = null;
    this.employee = null;
    this.email = this.route.snapshot.paramMap.get('email');
  }
  ngOnInit() {
    this.fetchEmployee();
  }
  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }
  fetchEmployee() {
    var _this = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.employee = yield _this.http.get(`http://localhost:8080/api/employees/${_this.email}`).toPromise();
      } catch (err) {
        console.error(err);
      }
    })();
  }
}
_HrEmployeeDetailsComponent = HrEmployeeDetailsComponent;
_HrEmployeeDetailsComponent.ɵfac = function HrEmployeeDetailsComponent_Factory(t) {
  return new (t || _HrEmployeeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_HrEmployeeDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _HrEmployeeDetailsComponent,
  selectors: [["app-hr-employee-details"]],
  decls: 8,
  vars: 2,
  consts: [[2, "padding", "30px", "font-family", "Arial"], [3, "click"], [2, "margin-top", "20px"], [4, "ngIf"], [2, "color", "green", "font-weight", "bold"]],
  template: function HrEmployeeDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HrEmployeeDetailsComponent_Template_button_click_1_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2B05 Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Employee Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HrEmployeeDetailsComponent_div_6_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HrEmployeeDetailsComponent_div_7_Template, 74, 17, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.employee);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.employee);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 1038:
/*!*************************************************************!*\
  !*** ./src/app/pages/hr/hr-onboarding-details.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HrOnboardingDetailsComponent: () => (/* binding */ HrOnboardingDetailsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);

var _HrOnboardingDetailsComponent;




function HrOnboardingDetailsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HrOnboardingDetailsComponent_div_6_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HrOnboardingDetailsComponent_div_6_div_27_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.updateStatus("VERIFIED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HrOnboardingDetailsComponent_div_6_div_27_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.updateStatus("REJECTED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HrOnboardingDetailsComponent_div_6_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Onboarding Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HrOnboardingDetailsComponent_div_6_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Candidate must resubmit onboarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HrOnboardingDetailsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p")(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p")(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Aadhaar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p")(20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "PAN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p")(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Bank Account:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HrOnboardingDetailsComponent_div_6_div_27_Template, 5, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HrOnboardingDetailsComponent_div_6_div_28_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HrOnboardingDetailsComponent_div_6_div_29_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r1.record.status === "VERIFIED" ? "green" : ctx_r1.record.status === "REJECTED" ? "red" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.record.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.record.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.record.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.record.aadhaar, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.record.pan, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.record.bankAccount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.record.status === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.record.status === "VERIFIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.record.status === "REJECTED");
  }
}
class HrOnboardingDetailsComponent {
  constructor(route, http, router) {
    this.route = route;
    this.http = http;
    this.router = router;
    this.email = null;
    this.record = null;
    this.email = this.route.snapshot.paramMap.get('email');
  }
  ngOnInit() {
    this.fetchData();
  }
  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }
  fetchData() {
    var _this = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield _this.http.get(`http://localhost:8080/api/onboarding/candidate?email=${_this.email}`).toPromise();
        _this.record = res && res.length > 0 ? res[res.length - 1] : null;
      } catch (err) {
        console.error(err);
      }
    })();
  }
  updateStatus(status) {
    var _this2 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.record) return;
      yield _this2.http.put(`http://localhost:8080/api/onboarding/update/${_this2.record.id}/${status}`, {}).toPromise();
      _this2.fetchData();
    })();
  }
}
_HrOnboardingDetailsComponent = HrOnboardingDetailsComponent;
_HrOnboardingDetailsComponent.ɵfac = function HrOnboardingDetailsComponent_Factory(t) {
  return new (t || _HrOnboardingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_HrOnboardingDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _HrOnboardingDetailsComponent,
  selectors: [["app-hr-onboarding-details"]],
  decls: 7,
  vars: 2,
  consts: [[2, "padding", "30px"], [3, "click"], [4, "ngIf"], [2, "font-weight", "600"], [2, "margin-right", "10px", 3, "click"], [2, "color", "green", "font-weight", "600"], [2, "color", "red", "font-weight", "600"]],
  template: function HrOnboardingDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HrOnboardingDetailsComponent_Template_button_click_1_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2B05 Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Onboarding Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HrOnboardingDetailsComponent_div_5_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HrOnboardingDetailsComponent_div_6_Template, 30, 11, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.record);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.record);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 58:
/*!**********************************************************************!*\
  !*** ./src/app/pages/interviewer/interviewer-dashboard.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterviewerDashboardComponent: () => (/* binding */ InterviewerDashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);

var _InterviewerDashboardComponent;





function InterviewerDashboardComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No interview requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InterviewerDashboardComponent_div_7_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "HR assigned this interview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15)(4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InterviewerDashboardComponent_div_7_div_19_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const app_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.respondToRequest(app_r2.id, "ACCEPTED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InterviewerDashboardComponent_div_7_div_19_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const app_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.respondToRequest(app_r2.id, "REJECTED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function InterviewerDashboardComponent_div_7_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Interview accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15)(4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InterviewerDashboardComponent_div_7_div_20_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const app_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.updateResult(app_r2.id, ctx_r14.getLevel(app_r2) === "L1" ? "L1_PASSED" : "L2_PASSED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Mark as Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InterviewerDashboardComponent_div_7_div_20_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const app_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.updateResult(app_r2.id, ctx_r17.getLevel(app_r2) === "L1" ? "L1_FAILED" : "L2_FAILED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Mark as Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const app_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r4.isResultDone(app_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r4.isResultDone(app_r2));
  }
}
function InterviewerDashboardComponent_div_7_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Candidate cleared this round");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InterviewerDashboardComponent_div_7_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Candidate cleared this round");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InterviewerDashboardComponent_div_7_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Candidate failed this round");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InterviewerDashboardComponent_div_7_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Candidate failed this round");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InterviewerDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10)(7, "span")(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span")(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Mode:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, InterviewerDashboardComponent_div_7_div_19_Template, 8, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, InterviewerDashboardComponent_div_7_div_20_Template, 8, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, InterviewerDashboardComponent_div_7_p_21_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, InterviewerDashboardComponent_div_7_p_22_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, InterviewerDashboardComponent_div_7_p_23_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, InterviewerDashboardComponent_div_7_p_24_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const app_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](app_r2.candidateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getLevel(app_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(ctx_r1.getDate(app_r2)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.formatTime(ctx_r1.getTime(app_r2)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getMode(app_r2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.getInterviewerStatus(app_r2) === "REQUESTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.getInterviewerStatus(app_r2) === "ACCEPTED" && app_r2.interviewStatus.includes("SCHEDULED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.getLevel(app_r2) === "L1" && app_r2.l1Result === "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.getLevel(app_r2) === "L2" && app_r2.l2Result === "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.getLevel(app_r2) === "L1" && app_r2.l1Result === "FAILED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.getLevel(app_r2) === "L2" && app_r2.l2Result === "FAILED");
  }
}
class InterviewerDashboardComponent {
  constructor(auth, http, router) {
    this.auth = auth;
    this.http = http;
    this.router = router;
    this.applications = [];
  }
  ngOnInit() {
    if (!this.auth.user || this.auth.user.role !== 'INTERVIEWER') {
      this.router.navigate(['/']);
      return;
    }
    this.fetchApplications();
    this.intervalId = setInterval(() => this.fetchApplications(), 5000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  fetchApplications() {
    var _this = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var _this$auth$user;
        const id = (_this$auth$user = _this.auth.user) === null || _this$auth$user === void 0 ? void 0 : _this$auth$user.interviewerId;
        _this.applications = yield _this.http.get(`http://localhost:8080/api/applications/interviewer/${id}`).toPromise();
      } catch (err) {
        console.error(err);
      }
    })();
  }
  respondToRequest(applicationId, status) {
    var _this2 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.http.post('http://localhost:8080/api/applications/interviewer-response', null, {
        params: {
          applicationId,
          status
        }
      }).toPromise();
      _this2.fetchApplications();
    })();
  }
  updateResult(applicationId, result) {
    var _this3 = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.http.post('http://localhost:8080/api/applications/update-interview-result', null, {
        params: {
          applicationId,
          result
        }
      }).toPromise();
      _this3.fetchApplications();
    })();
  }
  formatDate(dateString) {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  formatTime(time) {
    if (!time) return '';
    const [h, m] = time.split(':');
    const d = new Date();
    d.setHours(Number(h), Number(m));
    return d.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  getLevel(app) {
    var _this$auth$user2;
    const id = (_this$auth$user2 = this.auth.user) === null || _this$auth$user2 === void 0 ? void 0 : _this$auth$user2.interviewerId;
    return Number(id) === app.l1InterviewerId ? 'L1' : 'L2';
  }
  getInterviewerStatus(app) {
    var _this$auth$user3;
    const id = (_this$auth$user3 = this.auth.user) === null || _this$auth$user3 === void 0 ? void 0 : _this$auth$user3.interviewerId;
    return Number(id) === app.l1InterviewerId ? app.l1InterviewerStatus : app.l2InterviewerStatus;
  }
  getDate(app) {
    var _this$auth$user4;
    const id = (_this$auth$user4 = this.auth.user) === null || _this$auth$user4 === void 0 ? void 0 : _this$auth$user4.interviewerId;
    return Number(id) === app.l1InterviewerId ? app.l1Date : app.l2Date;
  }
  getTime(app) {
    var _this$auth$user5;
    const id = (_this$auth$user5 = this.auth.user) === null || _this$auth$user5 === void 0 ? void 0 : _this$auth$user5.interviewerId;
    return Number(id) === app.l1InterviewerId ? app.l1Time : app.l2Time;
  }
  getMode(app) {
    var _this$auth$user6;
    const id = (_this$auth$user6 = this.auth.user) === null || _this$auth$user6 === void 0 ? void 0 : _this$auth$user6.interviewerId;
    return Number(id) === app.l1InterviewerId ? app.l1Mode : app.l2Mode;
  }
  isResultDone(app) {
    const level = this.getLevel(app);
    return level === 'L1' ? app.l1Result === 'PASSED' || app.l1Result === 'FAILED' : app.l2Result === 'PASSED' || app.l2Result === 'FAILED';
  }
}
_InterviewerDashboardComponent = InterviewerDashboardComponent;
_InterviewerDashboardComponent.ɵfac = function InterviewerDashboardComponent_Factory(t) {
  return new (t || _InterviewerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
_InterviewerDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _InterviewerDashboardComponent,
  selectors: [["app-interviewer-dashboard"]],
  decls: 8,
  vars: 3,
  consts: [[2, "padding", "40px", "background", "white", "min-height", "100vh"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "30px"], [2, "margin", "0"], [2, "background", "#000", "color", "#fff", "padding", "4px 12px", "border", "none", "border-radius", "6px", "cursor", "pointer", 3, "click"], ["style", "opacity:0.6", 4, "ngIf"], ["style", "background:#f5f5f5;padding:20px;border-radius:10px;border:1px solid white;margin-bottom:20px", 4, "ngFor", "ngForOf"], [2, "opacity", "0.6"], [2, "background", "#f5f5f5", "padding", "20px", "border-radius", "10px", "border", "1px solid white", "margin-bottom", "20px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "font-size", "12px", "background", "#f5f5f5", "padding", "3px 8px", "border-radius", "6px"], [2, "display", "flex", "gap", "20px", "margin-top", "10px", "font-size", "14px"], [4, "ngIf"], ["style", "color:black;font-weight:bold;font-size:13px", 4, "ngIf"], ["style", "color:red;font-weight:500;font-size:13px", 4, "ngIf"], [2, "font-size", "13px", "opacity", "0.7"], [2, "display", "flex", "gap", "10px", "margin-top", "10px"], [2, "background", "#000", "color", "#fff", "border", "none", "padding", "6px 12px", "border-radius", "6px", "cursor", "pointer", 3, "click"], [2, "background", "#eaeaea", "border", "none", "padding", "6px 12px", "border-radius", "6px", "cursor", "pointer", 3, "click"], [2, "background", "#000", "color", "#fff", "border", "none", "padding", "6px 12px", "border-radius", "6px", "cursor", "pointer", 3, "disabled", "click"], [2, "background", "#eaeaea", "border", "none", "padding", "6px 12px", "border-radius", "6px", "cursor", "pointer", 3, "disabled", "click"], [2, "color", "black", "font-weight", "bold", "font-size", "13px"], [2, "color", "red", "font-weight", "500", "font-size", "13px"]],
  template: function InterviewerDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InterviewerDashboardComponent_Template_button_click_4_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InterviewerDashboardComponent_p_6_Template, 2, 0, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InterviewerDashboardComponent_div_7_Template, 25, 11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Welcome ", ctx.auth.user == null ? null : ctx.auth.user.interviewerName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.applications.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.applications);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 7195:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
var _LoginComponent;





function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_13_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.email);
  }
}
function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_14_Template_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select Interviewer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Kavya");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Arun");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Divya");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_14_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.password);
  }
}
const _c0 = function (a0, a1) {
  return {
    background: a0,
    color: a1
  };
};
class LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.role = '';
    this.email = '';
    this.name = '';
    this.password = '';
    this.interviewers = {
      Kavya: {
        id: 1,
        password: 'kavya123'
      },
      Arun: {
        id: 2,
        password: 'arun123'
      },
      Divya: {
        id: 3,
        password: 'divya123'
      }
    };
  }
  setRole(r) {
    this.role = r;
  }
  handleLogin() {
    if (this.role === 'CANDIDATE') {
      if (!this.email) {
        alert('Enter email');
        return;
      }
      this.auth.login('CANDIDATE', {
        email: this.email
      });
      this.router.navigate(['/candidate/dashboard']);
    }
    if (this.role === 'HR') {
      this.auth.login('HR');
      this.router.navigate(['/hr/dashboard']);
    }
    if (this.role === 'INTERVIEWER') {
      const interviewer = this.interviewers[this.name];
      if (!interviewer || interviewer.password !== this.password) {
        alert('Invalid credentials');
        return;
      }
      this.auth.login('INTERVIEWER', {
        interviewerId: interviewer.id,
        interviewerName: this.name
      });
      this.router.navigate([`/interviewer/${interviewer.id}`]);
    }
  }
}
_LoginComponent = LoginComponent;
_LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _LoginComponent,
  selectors: [["app-login"]],
  decls: 17,
  vars: 14,
  consts: [[2, "height", "100vh", "display", "flex", "justify-content", "center", "align-items", "center"], [1, "app-card"], [2, "margin-bottom", "5px", "font-size", "20px"], [2, "margin-bottom", "15px", "font-size", "13px"], [2, "display", "flex", "gap", "5px", "margin-bottom", "15px"], [1, "btn", 3, "ngStyle", "click"], [4, "ngIf"], [1, "btn", 2, "width", "100%", "padding", "8px", "background", "#000", "color", "#fff", "border", "none", 3, "click"], ["placeholder", "Enter your email", 2, "width", "100%", "padding", "7px", "margin-bottom", "10px", "border", "1px solid #000", 3, "ngModel", "ngModelChange"], [2, "width", "100%", "padding", "7px", "margin-bottom", "10px", "border", "1px solid #000", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "Kavya"], ["value", "Arun"], ["value", "Divya"], ["type", "password", "placeholder", "Enter password", 2, "width", "100%", "padding", "7px", "margin-bottom", "10px", "border", "1px solid #000", 3, "ngModel", "ngModelChange"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Employee Onboarding Portal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login to continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() {
        return ctx.setRole("CANDIDATE");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Candidate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() {
        return ctx.setRole("HR");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "HR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() {
        return ctx.setRole("INTERVIEWER");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Interviewer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 11, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() {
        return ctx.handleLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx.role === "CANDIDATE" ? "#000" : "#fff", ctx.role === "CANDIDATE" ? "#fff" : "#000"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c0, ctx.role === "HR" ? "#000" : "#fff", ctx.role === "HR" ? "#fff" : "#000"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c0, ctx.role === "INTERVIEWER" ? "#000" : "#fff", ctx.role === "INTERVIEWER" ? "#fff" : "#000"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "CANDIDATE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "INTERVIEWER");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  encapsulation: 2
});

/***/ }),

/***/ 4459:
/*!********************************************************************!*\
  !*** ./src/app/pages/onboarding-form/onboarding-form.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingFormComponent: () => (/* binding */ OnboardingFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ 954);
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);


var _OnboardingFormComponent;





class OnboardingFormComponent {
  constructor(auth, http, router) {
    var _this$router$getCurre, _this$router, _nav$extras$state$app, _nav$extras;
    this.auth = auth;
    this.http = http;
    this.router = router;
    this.formData = {
      address: '',
      aadhaar: '',
      pan: '',
      bankAccount: ''
    };
    this.applicationId = null;
    // read navigation state for applicationId (set by CandidateDashboard)
    const nav = (_this$router$getCurre = (_this$router = this.router).getCurrentNavigation) === null || _this$router$getCurre === void 0 ? void 0 : _this$router$getCurre.call(_this$router);
    this.applicationId = (_nav$extras$state$app = nav === null || nav === void 0 || (_nav$extras = nav.extras) === null || _nav$extras === void 0 || (_nav$extras = _nav$extras.state) === null || _nav$extras === void 0 ? void 0 : _nav$extras.applicationId) !== null && _nav$extras$state$app !== void 0 ? _nav$extras$state$app : null;
  }
  handleSubmit() {
    var _this = this;
    return (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        const user = _this.auth.user;
        yield _this.http.post('http://localhost:8080/api/onboarding', (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.formData), {}, {
          email: user === null || user === void 0 ? void 0 : user.email,
          applicationId: _this.applicationId
        })).toPromise();
        alert('Onboarding submitted successfully');
        _this.router.navigate(['/candidate/dashboard']);
      } catch (err) {
        console.error(err);
        alert('Error submitting form');
      }
    })();
  }
}
_OnboardingFormComponent = OnboardingFormComponent;
_OnboardingFormComponent.ɵfac = function OnboardingFormComponent_Factory(t) {
  return new (t || _OnboardingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
_OnboardingFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _OnboardingFormComponent,
  selectors: [["app-onboarding-form"]],
  decls: 10,
  vars: 4,
  consts: [[2, "padding", "40px"], [2, "display", "flex", "flex-direction", "column", "width", "300px", "gap", "10px", 3, "ngSubmit"], ["name", "address", "placeholder", "Address", "required", "", 3, "ngModel", "ngModelChange"], ["name", "aadhaar", "placeholder", "Aadhaar Number", "required", "", 3, "ngModel", "ngModelChange"], ["name", "pan", "placeholder", "PAN Number", "required", "", 3, "ngModel", "ngModelChange"], ["name", "bankAccount", "placeholder", "Bank Account Number", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit"]],
  template: function OnboardingFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Employee Onboarding Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function OnboardingFormComponent_Template_form_ngSubmit_3_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OnboardingFormComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.formData.address = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OnboardingFormComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.formData.aadhaar = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OnboardingFormComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.formData.pan = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OnboardingFormComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.formData.bankAccount = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.formData.address);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.formData.aadhaar);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.formData.pan);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.formData.bankAccount);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
  encapsulation: 2
});

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ 954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);

var _AuthService;


class AuthService {
  constructor() {
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.loadUser());
    this.user$ = this.userSubject.asObservable();
  }
  loadUser() {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  }
  get user() {
    return this.userSubject.value;
  }
  login(role, data = {}) {
    const user = (0,C_Users_madhu_OneDrive_Desktop_Employee_onboarding_system_main_onboarding_frontend_angular_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      role
    }, data);
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
_AuthService = AuthService;
_AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || _AuthService)();
};
_AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _AuthService,
  factory: _AuthService.ɵfac,
  providedIn: 'root'
});

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