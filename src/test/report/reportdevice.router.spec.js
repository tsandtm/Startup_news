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
// su dung cai nay de chay cac test va output ra cac loi
var alsatian_1 = require('alsatian');
// su dung cai nay de test api cua express
var supertest = require('supertest');
// su dung cai nay de ket hop voi asnyc test cua alsatian
var bluebird = require('bluebird');
// lay cai app chinh
var app_1 = require('../../api/app');
var path = require('path');
var testdata = require(path.join(__dirname, 'reportdevice.test.json'));
var config = require(path.join(__dirname, '..', '..', 'config', 'server.config.json'))['test'];
var ReportTest = (function () {
    function ReportTest() {
        // no se tao ra mot client gia va se noi chuyen voi url la http://localhost:8081/api 
        this.request = supertest('http://' + config.host + ':' + config.port + '/api');
    }
    // ham nay se chay dau tien truoc khi cac test chay
    ReportTest.prototype.setUp = function () {
        // khoi tao cai Server
        this.instance = app_1.default.listen(config.port, config.host);
        // console.log('chay setup')
    };
    // cai ham nay se chay cuoi cung sau khi cac test chay
    ReportTest.prototype.tearDown = function () {
        // dong server lai
        this.instance.close();
        // console.log('chay Teardown')
    };
    // dung se test nhung thu ko tra ve lien
    // va them cai dong de mo ta cai test
    // timeout la thoi gian ma cai test nay se cho
    ReportTest.prototype.getAllBook = function () {
        var _this = this;
        return new bluebird(function (resolve, reject) {
            _this.request.get('/ReportDevice')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(function (res) {
                alsatian_1.Expect(res.body).toEqual(testdata);
            })
                .end(function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    // @AsyncTest('should return book with name book1')
    // @Timeout(5000)
    // public getABook() {
    //     return new bluebird((resolve, reject) => {
    //         this.request.get('/book')
    //             .query({ id: 1 })
    //             .expect('Content-Type', /json/)
    //             .expect((res: supertest.Response) => {
    //                 Expect(res.body).toEqual(bookData[0]);
    //             })
    //             .end(err => {
    //                 if (err) {
    //                     reject(err);
    //                 } else {
    //                     resolve();
    //                 }
    //             })
    //     })
    // }
    // @AsyncTest('shuold create and return book')
    // @Timeout(5000)
    // public createABook() {
    //     return new bluebird((resolve, reject) => {
    //         this.request.post('/book')
    //             .type('form')
    //             .send({ name: 'tao tu test' })
    //             .expect(200)
    //             .expect((res: supertest.Response) => {
    //                 Expect(res.body).toEqual({ id: 4, name: 'tao tu test' })
    //             })
    //             .end(err => {
    //                 if (err) {
    //                     reject(err)
    //                 } else {
    //                     resolve()
    //                 }
    //             })
    //     })
    // }
    // @AsyncTest('should delete and return book name')
    // @Timeout(5000)
    // @TestCase(1)
    // public deleteABook(index: number) {
    //     return new bluebird((resolve, reject) => {
    //         this.request.delete('/book')
    //             .query({ id: bookData[index].id })
    //             .expect(200)
    //             .expect((res: supertest.Response) => {
    //                 Expect(res.text).toEqual('sach ' + bookData[index].name + ' da duoc huy')
    //             })
    //             .end(err => {
    //                 if (err) {
    //                     reject(err)
    //                 } else {
    //                     resolve()
    //                 }
    //             })
    //     })
    // }
    ReportTest.prototype.testAdd = function (v1, v2, expected) {
        alsatian_1.Expect(v1 + v2).toEqual(expected);
    };
    __decorate([
        alsatian_1.Setup, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ReportTest.prototype, "setUp", null);
    __decorate([
        alsatian_1.Teardown, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ReportTest.prototype, "tearDown", null);
    __decorate([
        alsatian_1.AsyncTest('mot danh sach cac device'),
        alsatian_1.Timeout(5000), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ReportTest.prototype, "getAllBook", null);
    __decorate([
        alsatian_1.Test('add 1 and 2 shuold return 3'),
        alsatian_1.TestCase(1, 2, 3), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object, Object]), 
        __metadata('design:returntype', void 0)
    ], ReportTest.prototype, "testAdd", null);
    return ReportTest;
}());
exports.ReportTest = ReportTest;
