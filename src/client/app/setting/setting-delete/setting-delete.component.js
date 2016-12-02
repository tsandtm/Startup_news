"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var setting_service_1 = require('../shared/setting.service');
var SettingDeleteComponent = (function () {
    function SettingDeleteComponent(settingservice, _router, _route) {
        this.settingservice = settingservice;
        this._router = _router;
        this._route = _route;
        this.pageTitle = 'Setting Delete';
        console.log(this._route.snapshot.params['id']);
    }
    SettingDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            console.log(params["id"] + 'aaaa');
            var id = +params["id"];
            _this.getSetting(id);
        });
    };
    SettingDeleteComponent.prototype.getSetting = function (id) {
        var _this = this;
        this.settingservice.getOne(id)
            .then(function (setting) { return _this.setting = setting; });
    };
    SettingDeleteComponent.prototype.Delete = function () {
        var _this = this;
        this.settingservice.Delete(this.setting).then(function (result) { return _this._router.navigate(['setting-list']); });
    };
    SettingDeleteComponent.prototype.Back = function () {
        this._router.navigate(['setting-list']);
    };
    SettingDeleteComponent = __decorate([
        core_1.Component({
            templateUrl: '/setting/setting-delete/setting-delete.component.html'
        }), 
        __metadata('design:paramtypes', [setting_service_1.SettingService, router_1.Router, router_1.ActivatedRoute])
    ], SettingDeleteComponent);
    return SettingDeleteComponent;
}());
exports.SettingDeleteComponent = SettingDeleteComponent;