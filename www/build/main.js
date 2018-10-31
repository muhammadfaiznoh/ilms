webpackJsonp([2],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    // go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\register\register.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="register">\n\n  <ion-list class="list-form">\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="tel" placeholder="Phone Number"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="First Name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Last Name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button color="primary" block (click)="register()">Create Account</button>\n\n\n\n  <div class="align-bottom" padding text-center>\n\n    Have an account? <span class="bold" (click)="login()">Sign in</span>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrscannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the QrscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrscannerPage = /** @class */ (function () {
    function QrscannerPage(navCtrl, navParams, qrScanner, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.viewCtrl = viewCtrl;
        this.isShow = false; //控制显示背景，避免切换页面卡顿
        //默认为false
        this.light = false;
        this.frontCamera = false;
    }
    QrscannerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    alert(text);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                    _this.navCtrl.pop();
                });
                // show camera preview
                _this.qrScanner.show();
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    QrscannerPage.prototype.ionViewDidEnter = function () {
        //页面可见时才执行
        this.showCamera();
        this.isShow = true; //显示背景
    };
    /**
     * 闪光灯控制，默认关闭
     */
    QrscannerPage.prototype.toggleLight = function () {
        if (this.light) {
            this.qrScanner.disableLight();
        }
        else {
            this.qrScanner.enableLight();
        }
        this.light = !this.light;
    };
    /**
     * 前后摄像头互换
     */
    QrscannerPage.prototype.toggleCamera = function () {
        if (this.frontCamera) {
            this.qrScanner.useBackCamera();
        }
        else {
            this.qrScanner.useFrontCamera();
        }
        this.frontCamera = !this.frontCamera;
    };
    QrscannerPage.prototype.showCamera = function () {
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    QrscannerPage.prototype.hideCamera = function () {
        window.document.querySelector('ion-app').classList.remove('cameraView');
        this.qrScanner.hide(); //需要关闭扫描，否则相机一直开着
        this.qrScanner.destroy(); //关闭
    };
    QrscannerPage.prototype.ionViewWillLeave = function () {
        this.hideCamera();
    };
    QrscannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qrscanner',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\qrscanner\qrscanner.html"*/'<!--\n\n  Generated template for the QrscannerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>qrscanner</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-scroll [ngClass]="{\'qrscanner\':isShow}" >\n\n  <div [ngClass]="{\'qrscanner-area\':isShow}">    \n\n  </div> \n\n   <div  [ngClass]="{\'through-line\':isShow}"></div>\n\n  <div class="button-bottom">\n\n      <button (click)="toggleLight()" ion-fab class="icon-camera" margin-right>\n\n          <ion-icon name="flash"></ion-icon>                  \n\n      </button>\n\n      <button (click)="toggleCamera()" ion-fab class="icon-camera">\n\n          <ion-icon name="reverse-camera"></ion-icon>                  \n\n      </button>\n\n  </div>    \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\qrscanner\qrscanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], QrscannerPage);
    return QrscannerPage;
}());

//# sourceMappingURL=qrscanner.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password_change_password__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MyAccountPage = /** @class */ (function () {
    function MyAccountPage(nav, userService) {
        this.nav = nav;
        this.userService = userService;
        this.createdCode = null;
        this.createdCode = "ID123456";
    }
    // go to changing password page
    MyAccountPage.prototype.changePassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__change_password_change_password__["a" /* ChangePasswordPage */]);
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-account',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\my-account\my-account.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My Account</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <!-- username-->\n\n  <ion-item class="no-border">\n\n    <ion-avatar item-left>\n\n      <img src="assets/img/user/adam.jpg" alt="">\n\n    </ion-avatar>\n\n    <span class="strong">Adam Lambert</span>\n\n    <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n\n  </ion-item>\n\n\n\n  <!-- Profile -->\n\n  <ion-item-group>\n\n\n\n    <ion-item-divider bgColor>PROFILE</ion-item-divider>\n\n    <ion-item>\n\n      <ion-icon name="md-create"></ion-icon>\n\n      Edit profile\n\n    </ion-item>\n\n    <ion-item (click)="changePassword()">\n\n      <ion-icon name="lock"></ion-icon>\n\n      Change password\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <ion-icon name="md-card"></ion-icon>\n\n      E-Card\n\n    </ion-item> -->\n\n    <!-- <ion-item>\n\n      <ion-icon name="md-share"></ion-icon>\n\n      Connected accounts\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="timer"></ion-icon>\n\n      Recent viewed\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="pricetags"></ion-icon>\n\n      Saved Offers\n\n    </ion-item> -->\n\n\n\n  </ion-item-group>\n\n\n\n  <!-- Other -->\n\n  <ion-item-group>\n\n    <!-- <ion-item-divider bgColor>OTHERS</ion-item-divider>\n\n    <ion-item>\n\n      <ion-icon name="podium"></ion-icon>\n\n      Leaderboard\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="person-add"></ion-icon>\n\n      Find foodies\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="home"></ion-icon>\n\n      Suggest a restaurant\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="md-share"></ion-icon>\n\n      Invite friend\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="send"></ion-icon>\n\n      Send feedback\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-information-circle"></ion-icon>\n\n      About\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="star"></ion-icon>\n\n      Rate us\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-exit"></ion-icon>\n\n      Sign out\n\n    </ion-item> -->\n\n    <ion-card >\n\n      <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n      <ion-card-content>\n\n        <p>E-Card: {{ createdCode }}</p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\my-account\my-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/qrscanner/qrscanner.module": [
		334,
		1
	],
	"../pages/tabs/tabs.module": [
		335,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_filter_tab_filter__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_attribute_tab_attribute__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ModalFilterPage = /** @class */ (function () {
    function ModalFilterPage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
        // tabs
        this.tabFilter = __WEBPACK_IMPORTED_MODULE_2__tab_filter_tab_filter__["a" /* TabFilterPage */];
        this.tabAttribute = __WEBPACK_IMPORTED_MODULE_3__tab_attribute_tab_attribute__["a" /* TabAttributePage */];
        this.selectedIndex = 0;
        if (navParams.get('tabName') == 'attribute') {
            this.selectedIndex = 1;
        }
    }
    ModalFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-filter',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\modal-filter\modal-filter.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-tabs class="modal-filter" color="primary" tabbarPlacement="top" [selectedIndex]="selectedIndex" #filterTabs>\n\n  <ion-tab tabTitle="FILTER" [root]="tabFilter"></ion-tab>\n\n  <ion-tab tabTitle="ATTRIBUTES" [root]="tabAttribute"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\modal-filter\modal-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ModalFilterPage);
    return ModalFilterPage;
}());

//# sourceMappingURL=modal-filter.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var TabFilterPage = /** @class */ (function () {
    function TabFilterPage(nav, viewCtrl) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        // set filter value
        this.filter = {
            shipTo: ''
        };
    }
    // close modal
    TabFilterPage.prototype.closeModal = function () {
        this.nav.pop();
        this.viewCtrl.dismiss(true);
    };
    TabFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-filter',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\tab-filter\tab-filter.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button (click)="closeModal()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Search Result(105)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="tab-filter">\n\n  <!--filter list-->\n\n  <ion-list class="list-no-border">\n\n    <ion-item>\n\n      <ion-label>Ship to</ion-label>\n\n      <ion-select [(ngModel)]="filter.shipTo">\n\n        <ion-option value="">All Regions</ion-option>\n\n        <ion-option value="vn">Vietnam</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item class="price-ranger">\n\n      <ion-label>Price</ion-label>\n\n      <ion-input type="text" placeholder="Min"></ion-input>\n\n      -\n\n      <ion-input type="text" placeholder="Max"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Free shipping</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Once pice only</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Sale items</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<!--Footer buttons-->\n\n<ion-footer class="category">\n\n  <ion-toolbar position="bottom">\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModal()">\n\n        CANCEL\n\n      </button>\n\n      <button ion-button (click)="closeModal()">\n\n        <span ion-text color="gray">APPLY</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\tab-filter\tab-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], TabFilterPage);
    return TabFilterPage;
}());

//# sourceMappingURL=tab-filter.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabAttributePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var TabAttributePage = /** @class */ (function () {
    function TabAttributePage(nav, viewCtrl) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        // all attributes
        this.attr = {
            category: 1,
            sleeve: '',
            fabric: ''
        };
    }
    // close modal
    TabAttributePage.prototype.closeModal = function () {
        // this.nav.pop();
        // this.viewCtrl.dismiss(true);
    };
    TabAttributePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-attribute',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\tab-attribute\tab-attribute.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button (click)="closeModal()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Search Result(105)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="tab-attribute">\n\n  <!--select attributes-->\n\n  <ion-list class="list-no-border">\n\n    <ion-item>\n\n      <ion-label>Categories</ion-label>\n\n      <ion-select [(ngModel)]="attr.category">\n\n        <ion-option value="1">Dress</ion-option>\n\n        <ion-option value="2">Skirt</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Sleeve Length</ion-label>\n\n      <ion-select [(ngModel)]="attr.sleeve">\n\n        <ion-option value="">All</ion-option>\n\n        <ion-option value="1">Short</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Fabric Type</ion-label>\n\n      <ion-select [(ngModel)]="attr.fabric">\n\n        <ion-option value="">All</ion-option>\n\n        <ion-option value="1">Batik</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<!--Footer buttons-->\n\n<ion-footer class="category">\n\n  <ion-toolbar position="bottom">\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModal()">\n\n        CANCEL\n\n      </button>\n\n      <button ion-button (click)="closeModal()">\n\n        <span ion-text color="gray">APPLY</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\tab-attribute\tab-attribute.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], TabAttributePage);
    return TabAttributePage;
}());

//# sourceMappingURL=tab-attribute.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalItemOptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ModalItemOptionPage = /** @class */ (function () {
    function ModalItemOptionPage(nav, itemService, navParams, viewCtrl, toastCtrl) {
        this.nav = nav;
        this.itemService = itemService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.item = navParams.get('item');
        this.item.option_price = 0;
    }
    // choose a option
    ModalItemOptionPage.prototype.chooseOption = function (optionGroup, option) {
        for (var i = 0; i < optionGroup.options.length; i++) {
            optionGroup.options[i].active = false;
        }
        option.active = true;
        optionGroup.currentOption = option;
        // recalculate price
        this.calculatePrice();
    };
    // calculate item price
    ModalItemOptionPage.prototype.calculatePrice = function () {
        this.item.option_price = 0;
        for (var i = 0; i < this.item.option_groups.length; i++) {
            if (this.item.option_groups[i].currentOption)
                this.item.option_price += this.item.option_groups[i].currentOption.price;
        }
    };
    // add to card
    ModalItemOptionPage.prototype.addCart = function (item) {
        var toast = this.toastCtrl.create({
            message: 'Item added to card',
            duration: 500,
            position: 'middle'
        });
        toast.present();
    };
    // buy now
    ModalItemOptionPage.prototype.buy = function (item) {
    };
    // close modal
    ModalItemOptionPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(true);
    };
    ModalItemOptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-item-option',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\modal-item-option\modal-item-option.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="light">\n\n    <ion-buttons start>\n\n      <button ion-button (click)="closeModal()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Product Specification</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <!--item thumbnail-->\n\n  <ion-item class="no-border border-bottom">\n\n    <ion-thumbnail item-left>\n\n      <img src="{{ item.thumb }}">\n\n    </ion-thumbnail>\n\n    <div>\n\n      <h2 class="price" ion-text color="danger" margin-top *ngIf="item.sale_price">{{ item.sale_price + item.option_price |\n\n        currency:\'USD\':true }}</h2>\n\n      <h2 class="price" ion-text color="danger" margin-top *ngIf="!item.sale_price">{{ item.price + item.option_price |\n\n        currency:\'USD\':true }}</h2>\n\n      <span ion-text color="gray">{{ item.selectedOptions }}</span>\n\n    </div>\n\n  </ion-item>\n\n\n\n  <div class="border-bottom" padding *ngFor="let optionGroup of item.option_groups">\n\n    <div>\n\n      {{ optionGroup.name }}\n\n      <span padding-left>{{ optionGroup.currentOption ? optionGroup.currentOption.name : \'\' }}</span>\n\n    </div>\n\n    <div class="item-option" *ngFor="let option of optionGroup.options"\n\n         (click)="chooseOption(optionGroup, option)"\n\n         [ngClass]="{\'active\': option.active}">\n\n      {{ option.name }}\n\n    </div>\n\n  </div>\n\n\n\n  <div class="border-bottom">\n\n    <ion-item class="no-border">\n\n      <ion-label>Ship to</ion-label>\n\n      <ion-select>\n\n        <ion-option value="">Singapore</ion-option>\n\n        <ion-option value="vn">Vietnam</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </div>\n\n  <div class="border-bottom" padding>\n\n    <div>Quantity</div>\n\n    <div class="input-qty" margin-top>\n\n      <span class="btn">\n\n        <ion-icon name="ios-remove"></ion-icon>\n\n      </span>\n\n      <input type="text" value="1">\n\n      <span class="btn">\n\n        <ion-icon name="ios-add"></ion-icon>\n\n      </span>\n\n      <div class="clear"></div>\n\n    </div>\n\n  </div>\n\n\n\n  <!--add to cart-->\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button block class="btn-add-cart" (click)="addCart(item)">ADD TO CART</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color="primary" block (click)="buy(item)">BUY NOW</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\modal-item-option\modal-item-option.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ModalItemOptionPage);
    return ModalItemOptionPage;
}());

//# sourceMappingURL=modal-item-option.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var OrderConfirmPage = /** @class */ (function () {
    function OrderConfirmPage(nav, cartService) {
        this.nav = nav;
        this.cartService = cartService;
        // set cart data
        this.cart = cartService.getAll();
    }
    // place order
    OrderConfirmPage.prototype.buy = function () {
        // back to home page
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    OrderConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-confirm',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\order-confirm\order-confirm.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Place Order</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class=" common-bg cart">\n\n  <div class="card">\n\n    <div class="card-header" padding>\n\n      Shipping address:\n\n    </div>\n\n    <div padding>\n\n      <span ion-text color="secondary">ENTER SHIPPING ADDRESS</span>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="card" margin-top *ngFor="let seller of cart.sellers; let sellerIndex = index"\n\n       [hidden]="!seller.items.length">\n\n    <!-- <div class="card-header" padding>\n\n      Seller: {{ seller.name }}\n\n    </div> -->\n\n\n\n    <ion-list class="list-full-border" no-margin>\n\n      <ion-item class="product" *ngFor="let item of seller.items; let i = index">\n\n        <ion-thumbnail item-left>\n\n          <img src="{{ item.thumb }}">\n\n        </ion-thumbnail>\n\n        <!--item\'s information-->\n\n        <div>\n\n          <div text-wrap>{{ item.name }}</div>\n\n          <!-- <div class="text-sm">\n\n            <span ion-text color="gray">{{ item.options.join(\',\') }}</span>\n\n          </div> -->\n\n          <div margin-top>\n\n            <div class="input-qty">\n\n            <span class="btn">\n\n              <ion-icon name="ios-remove"></ion-icon>\n\n            </span>\n\n              <input type="text" [(ngModel)]="item.quantity">\n\n              <span class="btn">\n\n              <ion-icon name="ios-add"></ion-icon>\n\n            </span>\n\n              <div class="clear"></div>\n\n            </div>\n\n            <div class="pull-right price">\n\n              <span>{{ item.price | currency:\'RM\':true }}</span>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-input placeholder="Massage to Supplier(Optional)"></ion-input>\n\n\n\n    <div class="card-footer" padding>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Subtotal</span>\n\n        <span class="pull-right" ion-text color="gray">{{ seller.subtotal | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Shipping</span>\n\n        <span class="pull-right" ion-text color="gray">{{ seller.shipping | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Total</span>\n\n        <span class="pull-right bold" ion-text color="danger">{{ seller.total | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!--Total price-->\n\n  <div class="card" margin-top>\n\n    <div class="card-footer" padding>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Subtotal</span>\n\n        <span class="pull-right" ion-text color="gray">{{ cart.subtotal | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Shipping</span>\n\n        <span class="pull-right" ion-text color="gray">{{ cart.shipping | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Coupon</span>\n\n        <span class="pull-right" ion-text color="secondary">PLEASE ENTER COUPON CODE</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer class="cart-footer" padding>\n\n  <ion-title>\n\n    <span ion-text color="gray">Total</span>\n\n    <br/>\n\n    <span class="bold" ion-text color="danger">{{ cart.total | currency:\'RM\':true }}</span>\n\n  </ion-title>\n\n  <ion-buttons end>\n\n    <button ion-button (click)="buy()" color="danger">\n\n      PLACE ORDER\n\n    </button>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\order-confirm\order-confirm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]])
    ], OrderConfirmPage);
    return OrderConfirmPage;
}());

//# sourceMappingURL=order-confirm.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(nav) {
        this.nav = nav;
    }
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\search\search.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Search</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list class="list-full-border">\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="I\'m shopping for"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <!--search history-->\n\n  <ion-list class="list-no-border">\n\n    <ion-item>\n\n      <ion-icon name="md-time" item-left></ion-icon>\n\n      <div>book</div>\n\n      <ion-icon name="close-circle" item-right color="gray"></ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="md-time" item-left></ion-icon>\n\n      <div>tshirt</div>\n\n      <ion-icon name="close-circle" item-right color="gray"></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div text-right padding>\n\n    <span ion-text color="danger">Clear history</span>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_users__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService() {
        this.users = __WEBPACK_IMPORTED_MODULE_1__mock_users__["a" /* USERS */];
    }
    UserService.prototype.getAll = function () {
        return this.users;
    };
    UserService.prototype.getItem = function (id) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id === parseInt(id)) {
                return this.users[i];
            }
        }
        return null;
    };
    UserService.prototype.remove = function (item) {
        this.users.splice(this.users.indexOf(item), 1);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(nav) {
        this.nav = nav;
    }
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\change-password\change-password.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Change Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="change-password">\n\n  <ion-list class="list-form">\n\n\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Your password"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="New password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button color="secondary" block>Save</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\change-password\change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(nav) {
        this.nav = nav;
    }
    // submit email
    ForgotPasswordPage.prototype.send = function () {
        // enter your code here
        // back to login page
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\forgot-password\forgot-password.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Forgot Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="forgot-password">\n\n  <ion-list class="list-form">\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Enter your email"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button color="primary" block (click)="send()">RESET</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\forgot-password\forgot-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(nav) {
        this.nav = nav;
    }
    // go to login page
    WelcomePage.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    // go to register page
    WelcomePage.prototype.register = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding class="welcome">\n\n  <div padding-horizontal text-center class="animated fadeInDown">\n\n    <div class="logo"></div>\n\n    <div class="logo2"></div>\n\n    <!-- <h2 ion-text class="text-primary">\n\n      <strong>Ionic 3</strong> Start Theme\n\n    </h2> -->\n\n  </div>\n\n  <div class="align-bottom" padding>\n\n    <div padding-left padding-right>\n\n \n\n  \n\n      <div margin-top>\n\n        <span ion-text color="light">Use Email</span>\n\n      </div>\n\n      <ion-grid no-padding>\n\n        <ion-row>\n\n          <ion-col no-padding>\n\n            <button ion-button block color="light" (click)="login()">Sign In</button>\n\n          </ion-col>\n\n          <ion-col no-padding padding-left>\n\n            <button ion-button block color="light" (click)="register()">Register</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list class="list-full-border">\n\n    <ion-item class="item-divider">General</ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Vibrate on touch</ion-label>\n\n      <ion-toggle checked="false" color="secondary"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Stay awake</ion-label>\n\n      <ion-toggle checked="false" color="secondary"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      Choose a custom ringtone\n\n      <ion-icon name="ios-arrow-forward" color="gray" item-right></ion-icon>\n\n    </ion-item>\n\n\n\n    <ion-item class="item-divider">Storage</ion-item>\n\n\n\n    <ion-item>\n\n      Clean cash history data\n\n      <ion-icon name="ios-arrow-forward" color="gray" item-right></ion-icon>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_item__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var WishListPage = /** @class */ (function () {
    function WishListPage(nav, itemService) {
        this.nav = nav;
        this.itemService = itemService;
        // get list items
        this.items = itemService.getAll();
    }
    // view a item
    WishListPage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // get discount percent
    WishListPage.prototype.discountPercent = function (originPrice, salePrice) {
        return Math.round((salePrice - originPrice) * 100 / originPrice);
    };
    // remove item from wish list
    WishListPage.prototype.remove = function (index) {
        this.items.splice(index, 1);
    };
    WishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wish-list',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\wish-list\wish-list.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>WishList</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class=" category">\n\n\n\n  <!--List of items-->\n\n  <ion-list no-margin class="list-full-border list-products list">\n\n    <ion-item class="product" *ngFor="let item of items; let i = index" (click)="viewItem(item.id)">\n\n      <ion-thumbnail item-left>\n\n        <img src="{{ item.thumb }}">\n\n      </ion-thumbnail>\n\n      <!--item\'s information-->\n\n      <div>\n\n        <div text-wrap>{{ item.name }}</div>\n\n        <div>\n\n          <span ion-text color="danger" *ngIf="item.sale_price">{{ item.sale_price | currency:\'RM\':true }}</span>\n\n          <span ion-text color="danger" *ngIf="!item.sale_price">{{ item.price | currency:\'RM\':true }}</span>\n\n        </div>\n\n        <div class="origin-price text-sm">\n\n          <span *ngIf="item.sale_price" class="text-decoration">{{ item.price | currency:\'RM\':true }}</span>\n\n          <span *ngIf="item.sale_price" class="discount-rate" ion-text color="danger">{{ discountPercent(item.price, item.sale_price) }}%</span>\n\n        </div>\n\n        <div class="bottom-info text-lg" padding-right>\n\n          <ion-icon name="trash" color="gray" class="pull-right" (click)="remove(i)"></ion-icon>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\wish-list\wish-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */]])
    ], WishListPage);
    return WishListPage;
}());

//# sourceMappingURL=wish-list.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MyOrderPage = /** @class */ (function () {
    function MyOrderPage(nav, orderService) {
        this.nav = nav;
        this.orderService = orderService;
        // set sample data
        this.orders = orderService.getAll();
    }
    MyOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-order',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\my-order\my-order.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My Orders</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="my-order common-bg">\n\n  <div class="card light-bg" margin-top *ngFor="let order of orders; let orderIndex = index">\n\n    <div class="card-header" padding>\n\n      <div>Order Id: {{ order.transaction_id }}</div>\n\n      <div>Order Time: {{ order.created_at }}</div>\n\n    </div>\n\n\n\n    <ion-list class="list-full-border" no-margin>\n\n      <ion-item class="product" *ngFor="let item of order.items; let i = index">\n\n        <ion-thumbnail item-left>\n\n          <img src="{{ item.thumb }}">\n\n        </ion-thumbnail>\n\n        <!--item\'s information-->\n\n        <div>\n\n          <div text-wrap>{{ item.name }}</div>\n\n          <div padding-bottom>\n\n            <span class="pull-right">{{ item.price | currency:\'RM\':true }} x {{ item.quantity }}</span>\n\n            <div class="clear"></div>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <div class="card-footer" padding>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Total</span>\n\n        <span class="pull-right bold" ion-text color="danger">{{ order.total | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\my-order\my-order.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]])
    ], MyOrderPage);
    return MyOrderPage;
}());

//# sourceMappingURL=my-order.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_orders__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = /** @class */ (function () {
    function OrderService() {
        this.orders = __WEBPACK_IMPORTED_MODULE_1__mock_orders__["a" /* ORDERS */];
    }
    OrderService.prototype.getAll = function () {
        return this.orders;
    };
    OrderService.prototype.getItem = function (id) {
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id === parseInt(id)) {
                return this.orders[i];
            }
        }
        return null;
    };
    OrderService.prototype.remove = function (item) {
        this.orders.splice(this.orders.indexOf(item), 1);
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], OrderService);
    return OrderService;
}());

//# sourceMappingURL=order-service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_stores__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreService = /** @class */ (function () {
    function StoreService() {
        this.stores = __WEBPACK_IMPORTED_MODULE_1__mock_stores__["a" /* STORES */];
    }
    StoreService.prototype.getAll = function () {
        return this.stores;
    };
    StoreService.prototype.getItem = function (id) {
        for (var i = 0; i < this.stores.length; i++) {
            if (this.stores[i].id === parseInt(id)) {
                return this.stores[i];
            }
        }
        return null;
    };
    StoreService.prototype.remove = function (item) {
        this.stores.splice(this.stores.indexOf(item), 1);
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StoreService);
    return StoreService;
}());

//# sourceMappingURL=store-service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(253);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_qr_scanner__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_qrcode2__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_category_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_item_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_store_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_cart_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_order_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_news_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_category_category__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_change_password_change_password__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_currency_converter_currency_converter__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_item_item__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_modal_filter_modal_filter__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modal_item_option_modal_item_option__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_my_account_my_account__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_my_order_my_order__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_order_confirm_order_confirm__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_search_search__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_settings_settings__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_store_store__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_tab_attribute_tab_attribute__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_tab_filter_tab_filter__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_welcome_welcome__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_wish_list_wish_list__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_qrscanner_qrscanner__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import services







// end import services
// end import services
// import pages























// end import pages
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_currency_converter_currency_converter__["a" /* CurrencyConverterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modal_filter_modal_filter__["a" /* ModalFilterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_tab_attribute_tab_attribute__["a" /* TabAttributePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tab_filter_tab_filter__["a" /* TabFilterPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_qrscanner_qrscanner__["a" /* QrscannerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/qrscanner/qrscanner.module#QrscannerPageModule', name: 'QrscannerPage', segment: 'qrscanner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_currency_converter_currency_converter__["a" /* CurrencyConverterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modal_filter_modal_filter__["a" /* ModalFilterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_tab_attribute_tab_attribute__["a" /* TabAttributePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tab_filter_tab_filter__["a" /* TabFilterPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_qrscanner_qrscanner__["a" /* QrscannerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__services_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_9__services_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_11__services_store_service__["a" /* StoreService */],
                __WEBPACK_IMPORTED_MODULE_12__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_13__services_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_14__services_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_qr_scanner__["a" /* QRScanner */]
                /* import services */
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
var CATEGORIES = [
    {
        id: 1,
        name: "Books",
        thumb: "assets/img/categories/books.png",
        item_count: 4
    },
    {
        id: 2,
        name: "T-Shirt",
        thumb: "assets/img/categories/tshirt.png",
        item_count: 1
    },
    {
        id: 3,
        name: "E-Books",
        thumb: "assets/img/categories/eBook.jpg",
        item_count: 2
    },
];
//# sourceMappingURL=mock-categories.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEMS; });
var ITEMS = [
    // {
    //   id: 1,
    //   category_id: 1,
    //   name: "The Breakthrough Insurance Agency",
    //   price: 30.0,
    //   sale_price: 25,
    //   shipping: 0,
    //   num_orders: 4,
    //   rating: 4.8,
    //   num_wish_list: 201,
    //   on_wish_list: false,
    //   thumb: "assets/img/items/insurancebook.jpg",
    //   images: [
    //     "assets/img/items/insurancebook.jpg",
    //   ],
    //   short_description: "The Breakthrough Insurance Agency",
    //   description: "",
    //   option_groups: [
    //     {
    //       name: "Bundle",
    //       options: [
    //         {
    //           name: "Standard",
    //           price: 0
    //         },
    //         {
    //           name: "Add Silicon Case",
    //           price: 1
    //         },
    //         {
    //           name: "Add Tempered Glass",
    //           price: 1
    //         },
    //       ]
    //     },
    //     {
    //       name: "Color",
    //       options: [
    //         {
    //           name: "MI4 CU LTE White",
    //           price: 2
    //         }
    //       ]
    //     }
    //   ],
    //   reviews: [
    //     {
    //       avatar: "assets/img/user/max.png",
    //       name: "Slimer",
    //       time: "01 Jul 2016",
    //       content: "this book helps me a alot",
    //       stars: 4
    //     },
    //     {
    //       avatar: "assets/img/user/mike.png",
    //       name: "Muhammed M.",
    //       time: "01 Jul 2016",
    //       content: "nice books! recommended!",
    //       stars: 5
    //     },
    //   ],
    //   seller: {
    //     id: 1,
    //     name: "FANTACY TECHNOLOGY",
    //     num_orders: 11102,
    //     rating: 4.8,
    //     num_wish_list: 2101,
    //   }
    // },
    // {
    //   id: 2,
    //   category_id: 1,
    //   name: "Note Book",
    //   price: 30,
    //   shipping: 0,
    //   num_orders: 2,
    //   rating: 4.8,
    //   num_wish_list: 201,
    //   on_wish_list: false,
    //   sale_price: null,
    //   thumb: "assets/img/items/book.jpg",
    //   images: [
    //     "assets/img/items/book.jpg",
    //     // "assets/img/detail/d_2.jpg",
    //     // "assets/img/detail/d_3.jpg"
    //   ]
    // },
    {
        id: 3,
        category_id: 1,
        name: "Marine Hull ",
        price: 30,
        shipping: 0,
        num_orders: 3,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: null,
        thumb: "assets/img/items/MarineHull.jpg",
        images: [
            "assets/img/items/MarineHull.jpg",
        ],
        short_description: "Marine Hull",
        description: "",
        reviews: [
            {
                avatar: "assets/img/user/max.png",
                name: "Slimer",
                time: "01 Jul 2016",
                content: "this book helps me a alot",
                stars: 4
            },
            {
                avatar: "assets/img/user/mike.png",
                name: "Muhammed M.",
                time: "01 Jul 2016",
                content: "nice books! recommended!",
                stars: 5
            },
        ],
    },
    {
        id: 4,
        category_id: 1,
        name: "Administration Life Policy Lifecycle",
        price: 30,
        shipping: 0,
        num_orders: 6,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: 20,
        thumb: "assets/img/items/AdministrationLifePolicyLifecycle.jpg",
        images: [
            "assets/img/items/AdministrationLifePolicyLifecycle.jpg",
        ],
        short_description: "Administration Life Policy Lifecycle",
        description: "",
        reviews: [
            {
                avatar: "assets/img/user/max.png",
                name: "Slimer",
                time: "01 Jul 2016",
                content: "this book helps me a alot",
                stars: 4
            },
            {
                avatar: "assets/img/user/mike.png",
                name: "Muhammed M.",
                time: "01 Jul 2016",
                content: "nice books! recommended!",
                stars: 5
            },
        ],
    },
    {
        id: 5,
        category_id: 2,
        name: "T-Shirt",
        price: 30,
        shipping: 0,
        num_orders: 1,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: 20,
        thumb: "assets/img/items/tshirtsale.png",
        images: [
            "assets/img/items/tshirtsale.png",
        ],
        short_description: "T-Shirt",
        description: "",
        reviews: [
            {
                avatar: "assets/img/user/max.png",
                name: "Slimer",
                time: "01 Jul 2016",
                content: "nice quality",
                stars: 4
            },
            {
                avatar: "assets/img/user/mike.png",
                name: "Muhammed M.",
                time: "01 Jul 2016",
                content: " recommended!",
                stars: 5
            },
        ],
    },
    {
        id: 6,
        category_id: 3,
        name: "How I Did It",
        price: 30,
        shipping: 0,
        num_orders: 4,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: null,
        thumb: "assets/img/items/howididit.jpg",
        images: [
            "assets/img/detail/howididit.jpg",
        ],
        short_description: "How I Did It",
        description: "",
        reviews: [
            {
                avatar: "assets/img/user/max.png",
                name: "Slimer",
                time: "01 Jul 2016",
                content: "this book helps me a alot",
                stars: 4
            },
            {
                avatar: "assets/img/user/mike.png",
                name: "Muhammed M.",
                time: "01 Jul 2016",
                content: "nice books! recommended!",
                stars: 5
            },
        ],
    },
    {
        id: 7,
        category_id: 3,
        name: "Primal Leadership",
        price: 30,
        shipping: 0,
        num_orders: 4,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: null,
        thumb: "assets/img/items/PrimalLeadership.jpg",
        images: [
            "assets/img/items/PrimalLeadership.jpg",
        ],
        short_description: "Primal Leadership",
        description: "",
        reviews: [
            {
                avatar: "assets/img/user/max.png",
                name: "Slimer",
                time: "01 Jul 2016",
                content: "this book helps me a alot",
                stars: 4
            },
            {
                avatar: "assets/img/user/mike.png",
                name: "Muhammed M.",
                time: "01 Jul 2016",
                content: "nice books! recommended!",
                stars: 5
            },
        ],
    },
    {
        id: 8,
        category_id: 1,
        name: "A practical guide to cosmetic surgery claims",
        price: 30,
        shipping: 0,
        num_orders: 1,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: 20,
        thumb: "assets/img/items/cosmeticclaims.jpg",
        images: [
            "assets/img/items/cosmeticclaims.jpg",
        ],
        short_description: "A practical guide to cosmetic surgery claims",
        description: "",
        reviews: [
            {
                avatar: "assets/img/user/max.png",
                name: "Slimer",
                time: "01 Jul 2016",
                content: "this book helps me a alot",
                stars: 4
            },
            {
                avatar: "assets/img/user/mike.png",
                name: "Muhammed M.",
                time: "01 Jul 2016",
                content: "nice books! recommended!",
                stars: 5
            },
        ],
    }
];
//# sourceMappingURL=mock-items.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARTS; });
var CARTS = {
    subtotal: 80,
    shipping: 20,
    total: 100,
    sellers: [
        {
            id: 1,
            name: "Ilms",
            subtotal: 60,
            shipping: 10,
            total: 70,
            items: [
                {
                    id: 1,
                    name: "Marine Hull",
                    price: 30,
                    quantity: 1,
                    thumb: "assets/img/items/MarineHull.jpg",
                    options: [
                        "Bundle 2",
                        "White"
                    ]
                },
                {
                    id: 1,
                    name: "How I Did It",
                    price: 30,
                    quantity: 1,
                    thumb: "assets/img/items/howididit.jpg",
                    options: [
                        "Bundle 2",
                        "White"
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Ilms",
            subtotal: 20,
            shipping: 10,
            total: 30,
            items: [
                {
                    id: 1,
                    name: "Administration Life Policy Lifecycle",
                    price: 20,
                    quantity: 1,
                    thumb: "assets/img/items/AdministrationLifePolicyLifecycle.jpg",
                    options: [
                        "XL",
                        "Pink"
                    ]
                }
            ]
        }
    ]
};
//# sourceMappingURL=mock-carts.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
var USERS = [];
//# sourceMappingURL=mock-users.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_account_my_account__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_wish_list_wish_list__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_order_my_order__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import pages









// end import pages
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.pages = [
            {
                title: 'Home',
                icon: 'ios-home-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            },
            {
                title: 'Categories',
                icon: 'ios-list-box-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__["a" /* CategoriesPage */]
            },
            {
                title: 'WishList',
                icon: 'md-heart-outline',
                count: 2,
                component: __WEBPACK_IMPORTED_MODULE_11__pages_wish_list_wish_list__["a" /* WishListPage */]
            },
            {
                title: 'My Order',
                icon: 'ios-timer-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_12__pages_my_order_my_order__["a" /* MyOrderPage */]
            },
            {
                title: 'My Account',
                icon: 'ios-contact-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_7__pages_my_account_my_account__["a" /* MyAccountPage */]
            },
            {
                title: 'Cart',
                icon: 'ios-cart-outline',
                count: 1,
                component: __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */]
            },
            {
                title: 'Settings',
                icon: 'ios-settings-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            },
            {
                title: 'Logout',
                icon: 'log-out',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]
            },
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content class="menu-left">\n\n    <!-- User profile -->\n\n    <div padding class="menu-left menu-bg">\n\n      <a menuClose>\n\n        <img class="profile-picture" src="assets/img/user/adam.jpg">\n\n        <h4 ion-text color="dark">Adam Lambert</h4>\n\n      </a>\n\n    </div>\n\n\n\n    <ion-list class="list-full-border">\n\n      <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n\n        <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n\n        {{ page.title }}\n\n        <ion-badge color="danger" item-right *ngIf="page.count">{{ page.count }}</ion-badge>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\app\app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ORDERS; });
var ORDERS = [
    {
        id: 3,
        transaction_id: "111200002223",
        created_at: "2016-09-23 23:00:00",
        total: 55,
        items: [
            {
                id: 1,
                name: "The Breakthrough Insurance Agency",
                quantity: 1,
                price: 25,
                thumb: "assets/img/items/insurancebook.jpg",
            },
            {
                id: 2,
                category_id: 1,
                name: "Marine Hull",
                quantity: 1,
                price: 30,
                thumb: "assets/img/items/MarineHull.jpg",
            }
        ]
    },
    {
        id: 2,
        transaction_id: "111200002222",
        created_at: "2016-09-23 23:00:00",
        total: 60,
        items: [
            {
                id: 1,
                name: "How I Did It",
                quantity: 1,
                price: 30,
                thumb: "assets/img/items/howididit.jpg",
            },
            {
                id: 2,
                category_id: 1,
                name: "Primal Leadership",
                quantity: 2,
                price: 30,
                thumb: "assets/img/items/PrimalLeadership.jpg",
            }
        ]
    },
];
//# sourceMappingURL=mock-orders.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORES; });
var STORES = [];
//# sourceMappingURL=mock-stores.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_newss__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = /** @class */ (function () {
    function NewsService() {
        this.newss = __WEBPACK_IMPORTED_MODULE_1__mock_newss__["a" /* NEWSS */];
    }
    NewsService.prototype.getAll = function () {
        return this.newss;
    };
    NewsService.prototype.getItem = function (id) {
        for (var i = 0; i < this.newss.length; i++) {
            if (this.newss[i].id === parseInt(id)) {
                return this.newss[i];
            }
        }
        return null;
    };
    NewsService.prototype.remove = function (item) {
        this.newss.splice(this.newss.indexOf(item), 1);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news-service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NEWSS; });
var NEWSS = [];
//# sourceMappingURL=mock-newss.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyConverterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CurrencyConverterPage = /** @class */ (function () {
    function CurrencyConverterPage(nav) {
        this.nav = nav;
    }
    CurrencyConverterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-currency-converter',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\currency-converter\currency-converter.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CurrencyConverter</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="currency-converter">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\currency-converter\currency-converter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CurrencyConverterPage);
    return CurrencyConverterPage;
}());

//# sourceMappingURL=currency-converter.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_store_service__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var StorePage = /** @class */ (function () {
    function StorePage(nav, storeService) {
        this.nav = nav;
        this.storeService = storeService;
    }
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\store\store.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Store</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="store">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\store\store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_store_service__["a" /* StoreService */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_items__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */];
    }
    ItemService.prototype.getAll = function () {
        return this.items;
    };
    ItemService.prototype.getByCategory = function (catId) {
        var items = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i].category_id == catId) {
                items.push(__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i]);
            }
        }
        return items;
    };
    ItemService.prototype.getItem = function (id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === parseInt(id)) {
                return this.items[i];
            }
        }
        return null;
    };
    ItemService.prototype.remove = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ItemService);
    return ItemService;
}());

//# sourceMappingURL=item-service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__qrscanner_qrscanner__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(nav, categoryService, itemService) {
        this.nav = nav;
        this.categoryService = categoryService;
        this.itemService = itemService;
        // list slides for slider
        this.slides = [
            {
                src: 'assets/img/news1.jpg'
            },
            {
                src: 'assets/img/news2.jpg'
            },
            {
                src: 'assets/img/news3.jpg'
            },
            {
                src: 'assets/img/news4.jpg'
            },
            {
                src: 'assets/img/news5.jpg'
            },
            {
                src: 'assets/img/news6.jpg'
            }
        ];
        this.categories = categoryService.getAll();
        this.items = itemService.getAll();
    }
    // view categories
    HomePage.prototype.viewCategories = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__categories_categories__["a" /* CategoriesPage */]);
    };
    // view a category
    HomePage.prototype.viewCategory = function (catId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */], { id: catId });
    };
    // view a item
    HomePage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // go to search page
    HomePage.prototype.goToSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.goToQrScanner = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__qrscanner_qrscanner__["a" /* QrscannerPage */]);
    };
    // view cart
    HomePage.prototype.goToCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\home\home.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="goToSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="goToQrScanner()">\n\n        <ion-icon name="qr-scanner"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="goToCart()">\n\n        <ion-icon name="cart"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class=" common-bg">\n\n  <!-- slider on top-->\n\n  <ion-slides pager autoplay="6000" loop="true">\n\n\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img src="{{ slide.src }}" alt="">\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n\n\n  <!--list categories-->\n\n  <ion-card>\n\n    <ion-list class="cat-list">\n\n      <ion-row>\n\n        <ion-col *ngFor="let cat of categories | slice:0:3; let i = index" (click)="viewCategory(cat.id)">\n\n          <img src="{{ cat.thumb }}" alt="">\n\n          <div text-center>{{ cat.name }}</div>\n\n        </ion-col>\n\n        <ion-col text-center (click)="viewCategories()">\n\n          <img src="assets/img/categories/all.png" alt="">\n\n          <div text-center>All categories</div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <!--Deals-->\n\n  <ion-grid class="grid-no-padding deals">\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <ion-card>\n\n          <div>Flash Deals</div>\n\n          <ion-badge color="primary">00:00:01</ion-badge>\n\n          <img src="assets/img/items/MarineHull.jpg" alt="">\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <ion-card>\n\n          <div>Super Deals</div>\n\n          <ion-badge color="primary">Up to 90% off</ion-badge>\n\n          <img src="assets/img/items/PrimalLeadership.jpg" alt="">\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <h4 text-center>JUST FOR YOU</h4>\n\n\n\n  <!--List of items-->\n\n  <ion-grid class="list-cards">\n\n    <ion-row>\n\n      <ion-col *ngFor="let item of items" col-6 class="product" (click)="viewItem(item.id)">\n\n        <div class="card light-bg">\n\n          <img src="{{ item.thumb }}" alt="{{ item.name }}">\n\n          <div class="price" text-center>{{ item.price | currency:\'RM\':true }}</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_confirm_order_confirm__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(nav, cartService) {
        this.nav = nav;
        this.cartService = cartService;
        // set cart data
        this.cart = cartService.getAll();
    }
    // remove item
    CartPage.prototype.remove = function (itemIndex, sellerIndex) {
        this.cart.sellers[sellerIndex].items.splice(itemIndex, 1);
    };
    // place order
    CartPage.prototype.buy = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__order_confirm_order_confirm__["a" /* OrderConfirmPage */]);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cart</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class=" common-bg">\n\n  <!--Choose shipping location-->\n\n  <div class="card">\n\n    <ion-item class="no-border">\n\n      <ion-label>Ship to</ion-label>\n\n      <ion-select>\n\n        <ion-option value="">Malaysia</ion-option>\n\n        <ion-option value="vn">Vietnam</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </div>\n\n\n\n  <div class="card" margin-top *ngFor="let seller of cart.sellers; let sellerIndex = index"\n\n       [hidden]="!seller.items.length">\n\n    <!-- <div class="card-header" padding>\n\n      Seller: {{ seller.name }}\n\n    </div> -->\n\n\n\n    <ion-list class="list-full-border" no-margin>\n\n      <ion-item class="product" *ngFor="let item of seller.items; let i = index">\n\n        <ion-thumbnail item-left>\n\n          <img src="{{ item.thumb }}">\n\n        </ion-thumbnail>\n\n        <!--item\'s information-->\n\n        <div>\n\n          <div text-wrap>{{ item.name }}</div>\n\n          <!-- <div class="text-sm">\n\n            <span ion-text color="gray">{{ item.options.join(\',\') }}</span>\n\n          </div> -->\n\n          <div padding-bottom>\n\n            <span class="pull-right">{{ item.price | currency:\'RM\':true }}</span>\n\n            <div class="clear"></div>\n\n          </div>\n\n          <div>\n\n            <div class="input-qty">\n\n            <span class="btn">\n\n              <ion-icon name="ios-remove"></ion-icon>\n\n            </span>\n\n              <input type="text" [(ngModel)]="item.quantity">\n\n              <span class="btn">\n\n              <ion-icon name="ios-add"></ion-icon>\n\n            </span>\n\n              <div class="clear"></div>\n\n            </div>\n\n            <div class="pull-right bottom-info text-lg trash-btn">\n\n              <ion-icon name="trash" color="gray" class="pull-right" (click)="remove(i, sellerIndex)"></ion-icon>\n\n              <div class="clear"></div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n    <div class="card-footer" padding>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Subtotal</span>\n\n        <span class="pull-right" ion-text color="gray">{{ seller.subtotal | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Shipping</span>\n\n        <span class="pull-right" ion-text color="gray">{{ seller.shipping | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Total</span>\n\n        <span class="pull-right bold" ion-text color="danger">{{ seller.total | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!--Total price-->\n\n  <div class="card" margin-top>\n\n    <div class="card-footer" padding>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Subtotal</span>\n\n        <span class="pull-right" ion-text color="gray">{{ cart.subtotal | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n      <div>\n\n        <span class="pull-left" ion-text color="gray">Shipping</span>\n\n        <span class="pull-right" ion-text color="gray">{{ cart.shipping | currency:\'RM\':true }}</span>\n\n        <div class="clear"></div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer class="cart-footer" padding>\n\n  <ion-title>\n\n    <span ion-text color="gray">Total</span>\n\n    <br/>\n\n    <span class="bold" ion-text color="danger">{{ cart.total | currency:\'RM\':true }}</span>\n\n  </ion-title>\n\n  <ion-buttons end>\n\n    <button ion-button (click)="buy()" color="danger">\n\n      BUY ALL\n\n    </button>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(nav) {
        this.nav = nav;
    }
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    // go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    // go to forgot password page
    LoginPage.prototype.forgotPwd = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\login\login.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="login">\n\n  <ion-list class="list-form">\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button color="primary" block (click)="login()">LOGIN</button>\n\n\n\n  <div text-right margin-top margin-bottom (click)="forgotPwd()">Forgot password?</div>\n\n\n\n\n\n\n\n \n\n\n\n  <div class="align-bottom" padding text-center>\n\n    No Account? <span class="bold" (click)="register()">Register</span>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_categories__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService() {
        this.categories = __WEBPACK_IMPORTED_MODULE_1__mock_categories__["a" /* CATEGORIES */];
    }
    CategoryService.prototype.getAll = function () {
        return this.categories;
    };
    CategoryService.prototype.getItem = function (id) {
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === parseInt(id)) {
                return this.categories[i];
            }
        }
        return null;
    };
    CategoryService.prototype.remove = function (item) {
        this.categories.splice(this.categories.indexOf(item), 1);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_item_option_modal_item_option__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ItemPage = /** @class */ (function () {
    function ItemPage(nav, navParams, itemService, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.itemService = itemService;
        this.modalCtrl = modalCtrl;
        // get the first item as sample data
        this.id = navParams.get('id');
        this.item = itemService.getItem(this.id);
    }
    // add or remove item on wish list
    ItemPage.prototype.toggleWishList = function (item) {
        item.on_wish_list = !item.on_wish_list;
    };
    // get item options group name
    ItemPage.prototype.getOptionGroupsName = function (item) {
        var optionGroups = [];
        for (var i = 0; i < item.option_groups.length; i++) {
            optionGroups.push(item.option_groups[i].name);
        }
        return optionGroups.join(',');
    };
    // make array with range is n
    ItemPage.prototype.range = function (n) {
        return new Array(n);
    };
    // open item option modal
    ItemPage.prototype.showOptions = function (item) {
        // show modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */], { item: item });
        // listen for modal close
        modal.onDidDismiss(function (confirm) {
            if (confirm) {
                // apply filter here
            }
            else {
                // do nothing
            }
        });
        modal.present();
    };
    ItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\item\item.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ item.name }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class=" common-bg">\n\n\n\n  <div class="card light-bg">\n\n    <!-- slider on top-->\n\n    <ion-slides pager autoplay="2000" class="border-bottom">\n\n\n\n      <ion-slide *ngFor="let slide of item.images">\n\n        <img src="{{ slide }}" alt="">\n\n      </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n    <div class="rlt">\n\n      <button ion-button class="btn-wish-list card" (click)="toggleWishList(item)" color="light">\n\n        <ion-icon name="md-heart" color="gray" [hidden]="item.on_wish_list"></ion-icon>\n\n        <ion-icon name="md-heart" color="danger" [hidden]="!item.on_wish_list"></ion-icon>\n\n      </button>\n\n    </div>\n\n\n\n    <div text-center padding margin-top class="border-bottom">\n\n      <p>{{ item.short_description }}</p>\n\n      <h1 class="price" ion-text color="danger" margin-top *ngIf="item.sale_price">{{ item.sale_price | currency:\'RM\':true\n\n        }}</h1>\n\n      <h1 class="price" ion-text color="danger" margin-top *ngIf="!item.sale_price">{{ item.price | currency:\'RM\':true }}</h1>\n\n      <h2 class="origin-price text-decoration" ion-text color="gray" margin-top *ngIf="item.sale_price">{{ item.price |\n\n        currency:\'RM\':true }}</h2>\n\n    </div>\n\n\n\n    <ion-grid>\n\n      <ion-row class="item-stats">\n\n        <ion-col text-center>\n\n          <div class="text-lg">{{ item.rating }}</div>\n\n          <span class="text-sm" ion-text color="gray">FeedBacks</span>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <div class="text-lg">{{ item.num_orders}}</div>\n\n          <span class="text-sm" ion-text color="gray">Orders</span>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <div class="text-lg">{{ item.num_wish_list}}</div>\n\n          <span class="text-sm" ion-text color="gray">Wish List</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!--item options-->\n\n  <div class="card light-bg" margin-top>\n\n    <!-- <ion-item class="no-border">\n\n      <div>\n\n        <div>{{ getOptionGroupsName(item) }}</div>\n\n        <div>\n\n          <span ion-text color="gray" class="pull-left" *ngIf="item.shipping == 0">Free shipping</span>\n\n          <span ion-text color="gray" class="pull-left" *ngIf="item.shipping != 0">Shipping: {{ item.shipping | currency:\'USD\':true}}</span>\n\n        </div>\n\n      </div>\n\n\n\n      <div item-right>\n\n        <span class="bold" ion-text color="secondary" (click)="showOptions(item)">SELECT</span>\n\n      </div>\n\n    </ion-item> -->\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button block class="btn-add-cart" (click)="showOptions(item)">ADD TO CART</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button color="primary" block (click)="showOptions(item)">BUY NOW</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!--Description-->\n\n  <div class="card light-bg" margin-top>\n\n    <div class="border-bottom" padding>Item Description</div>\n\n    <div padding>{{ item.description }}</div>\n\n  </div>\n\n\n\n  <!--Feed backs-->\n\n  <div class="card light-bg" margin-top>\n\n    <div padding>\n\n      Feedback({{ item.reviews.length }})\n\n    </div>\n\n\n\n    <ion-list>\n\n      <ion-item *ngFor="let review of item.reviews" text-wrap>\n\n        <ion-avatar item-left>\n\n          <img src="{{ review.avatar }}">\n\n        </ion-avatar>\n\n\n\n        <div>\n\n          <div>\n\n            <span class="pull-left">{{ review.name }}</span>\n\n            <span class="pull-right text-sm">\n\n              <ion-icon name="md-star" color="orange" *ngFor="let start of range(review.stars)"></ion-icon>\n\n            <ion-icon name="md-star" color="gray" *ngFor="let start of range(5 - review.stars)"></ion-icon>\n\n            </span>\n\n\n\n            <div class="clear"></div>\n\n          </div>\n\n\n\n          <div>\n\n            <span class="text-sm" ion-text color="gray">{{ review.time }}</span>\n\n          </div>\n\n\n\n          <p class="text-sm">\n\n            {{ review.content }}\n\n          </p>\n\n        </div>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <!--Seller info-->\n\n  <!-- <div class="card light-bg" margin-top>\n\n    <div padding class="border-bottom">\n\n      Seller info\n\n    </div>\n\n    <div class="border-bottom" padding>\n\n      {{ item.seller.name }}\n\n    </div>\n\n\n\n    <ion-grid>\n\n      <ion-row class="item-stats">\n\n        <ion-col text-center>\n\n          <div class="text-lg">{{ item.seller.rating }}</div>\n\n          <span class="text-sm" ion-text color="gray">FeedBacks</span>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <div class="text-lg">{{ item.seller.num_orders}}</div>\n\n          <span class="text-sm" ion-text color="gray">Orders</span>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <div class="text-lg">{{ item.seller.num_wish_list}}</div>\n\n          <span class="text-sm" ion-text color="gray">Wish List</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\item\item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(nav, categoryService) {
        this.nav = nav;
        this.categoryService = categoryService;
        this.categories = categoryService.getAll();
    }
    // view category
    CategoriesPage.prototype.viewCategory = function (categoryId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */], { id: categoryId });
    };
    // view cart
    CategoriesPage.prototype.goToCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\categories\categories.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Categories</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="goToCart()">\n\n        <ion-icon name="cart"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="categories">\n\n  <ion-list class="list-no-border">\n\n    <ion-item *ngFor="let category of categories" (click)="viewCategory(category.id)">\n\n      {{ category.name }} ({{ category.item_count }})\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\categories\categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_filter_modal_filter__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_item__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(nav, navParams, itemService, categoryService, modalCtrl, actionSheetCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.itemService = itemService;
        this.categoryService = categoryService;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        // view type
        this.viewType = 'list';
        // sort by
        this.sortBy = 'Best Match';
        // get list items of a category as sample
        this.id = navParams.get('id');
        this.items = itemService.getByCategory(this.id);
        // set category info
        this.category = categoryService.getItem(this.id);
    }
    // switch to list view
    CategoryPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    CategoryPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    // get discount percent
    CategoryPage.prototype.discountPercent = function (originPrice, salePrice) {
        return Math.round((salePrice - originPrice) * 100 / originPrice);
    };
    // choose sort by
    CategoryPage.prototype.chooseSortBy = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Best Match',
                    handler: function () {
                        _this.sortBy = 'Best Match';
                    }
                },
                {
                    text: 'Lowest Price First',
                    handler: function () {
                        _this.sortBy = 'Lowest Price First';
                    }
                },
                {
                    text: 'Highest Price First',
                    handler: function () {
                        _this.sortBy = 'Highest Price First';
                    }
                },
                {
                    text: 'No. of orders',
                    handler: function () {
                        _this.sortBy = 'No. of orders';
                    }
                },
                {
                    text: 'Seller Rating',
                    handler: function () {
                        _this.sortBy = 'Seller Rating';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // show filter modal
    CategoryPage.prototype.openFilter = function (tabName) {
        // show modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_filter_modal_filter__["a" /* ModalFilterPage */], { tabName: tabName });
        // listen for modal close
        modal.onDidDismiss(function (confirm) {
            if (confirm) {
                // apply filter here
            }
            else {
                // do nothing
            }
        });
        modal.present();
    };
    // view a item
    CategoryPage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // view cart
    CategoryPage.prototype.goToCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\MG\Documents\work\qrcode\src\pages\category\category.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ category.name }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="goToCart()">\n\n        <ion-icon name="cart"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div padding class="border-bottom text-lg">\n\n    <span class="pull-left" (click)="chooseSortBy()" ion-text color="gray">\n\n      {{ sortBy }}\n\n      <ion-icon name="md-arrow-dropdown"></ion-icon>\n\n    </span>\n\n    <ion-icon class="pull-right" name="apps" (click)="viewGrid()" [hidden]="viewType == \'grid\'"></ion-icon>\n\n    <ion-icon class="pull-right" name="menu" (click)="viewList()" [hidden]="viewType == \'list\'"></ion-icon>\n\n    <div class="clear"></div>\n\n  </div>\n\n\n\n  <!--List of items-->\n\n  <ion-list no-margin class="list-full-border list-products"\n\n            [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n\n    <ion-item class="product" *ngFor="let item of items" (click)="viewItem(item.id)">\n\n      <ion-thumbnail item-left>\n\n        <img src="{{ item.thumb }}">\n\n      </ion-thumbnail>\n\n      <!--item\'s information-->\n\n      <div>\n\n        <div text-wrap>{{ item.name }}</div>\n\n        <div>\n\n          <span ion-text color="danger" *ngIf="item.sale_price">{{ item.sale_price | currency:\'RM\':true }}</span>\n\n          <span ion-text color="danger" *ngIf="!item.sale_price">{{ item.price | currency:\'RM\':true }}</span>\n\n        </div>\n\n        <div class="origin-price text-sm">\n\n          <span *ngIf="item.sale_price" class="text-decoration">{{ item.price | currency:\'RM\':true }}</span>\n\n          <span *ngIf="item.sale_price" class="discount-rate" ion-text color="danger">{{ discountPercent(item.price, item.sale_price) }}%</span>\n\n        </div>\n\n        <div class="bottom-info text-sm">\n\n          <span ion-text color="gray" class="pull-left" *ngIf="item.shipping == 0">Free shipping</span>\n\n          <span ion-text color="gray" class="pull-left" *ngIf="item.shipping != 0">Shipping: {{ item.shipping | currency:\'USD\':true}}</span>\n\n          <span ion-text color="gray" class="pull-right">\n\n            {{ item.num_orders }} Item Left\n\n          </span>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n<!--Footer buttons-->\n\n<ion-footer class="category">\n\n  <ion-toolbar position="bottom">\n\n    <!--filter button-->\n\n    <!-- <ion-buttons text-center start>\n\n      <button ion-button icon-left (click)="openFilter(\'filter\')">\n\n        <ion-icon name="ios-funnel"></ion-icon>\n\n        FILTER\n\n      </button>\n\n    </ion-buttons> -->\n\n    <!--attribute button-->\n\n    <!-- <ion-buttons text-center end>\n\n      <button ion-button icon-left (click)="openFilter(\'attribute\')">\n\n        <ion-icon name="apps"></ion-icon>\n\n        ATTRIBUTE\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\MG\Documents\work\qrcode\src\pages\category\category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_carts__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = /** @class */ (function () {
    function CartService() {
        this.carts = __WEBPACK_IMPORTED_MODULE_1__mock_carts__["a" /* CARTS */];
    }
    CartService.prototype.getAll = function () {
        return this.carts;
    };
    CartService.prototype.getItem = function (id) {
        for (var i = 0; i < this.carts.length; i++) {
            if (this.carts[i].id === parseInt(id)) {
                return this.carts[i];
            }
        }
        return null;
    };
    CartService.prototype.remove = function (item) {
        this.carts.splice(this.carts.indexOf(item), 1);
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.js.map